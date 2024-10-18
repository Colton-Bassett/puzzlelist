"use server";

import prisma from "@/lib/db";
import { getSession, Session } from "@auth0/nextjs-auth0";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getDefaultPuzzles() {
	// Get all puzzles EXCEPT ones a user has created
	const defaultPuzzles = await prisma.puzzle.findMany({
		where: {
			creatorId: null,
		},
	});
	return defaultPuzzles;
}

export async function createUser(session: Session) {
	if (session.user) {
		// console.log("auth0 user found", session.user);
		const user = session.user;

		const existingUser = await prisma.user.findUnique({
			where: {
				auth0Sub: user.sub,
			},
		});

		if (!existingUser) {
			// Create new user
			console.log("creating new user");
			const newUser = await prisma.user.create({
				data: {
					name: user.name,
					auth0Sub: user.sub,
					userPuzzles: {
						create: [],
					},
				},
			});

			console.log("new user created", newUser);
		} else {
			console.log("user exists in db");
		}
	} else {
		console.log("auth0 user not found", session);
	}
}

export async function addPuzzleToUser(puzzleId: string) {
	// Get the session to identify the current user
	const session = await getSession();
	const user = session?.user;

	if (!user?.sub) {
		// User not logged in, redirect to login
		redirect("/api/auth/login");
	}
	const auth0Sub = user.sub;

	try {
		const userFromDB = await prisma.user.findUnique({
			where: { auth0Sub },
		});

		if (userFromDB) {
			// Add the puzzle to the user's UserPuzzle list
			await prisma.userPuzzle.create({
				data: {
					userId: userFromDB.id,
					puzzleId: puzzleId,
				},
			});
			return { success: true, message: "Puzzle added successfully." };
		} else {
			throw new Error("User not found in the database.");
		}
	} catch (error) {
		console.error("Error adding puzzle:", error);
		throw new Error("Failed to add puzzle. Please try again.");
	}
}

export async function getUserPuzzles() {
	// Get session to identify the current user
	const session = await getSession();
	const user = session?.user;

	if (user?.sub) {
		const auth0Sub = user.sub;

		// Find user in the database
		const userFromDB = await prisma.user.findUnique({
			where: { auth0Sub },
			include: { userPuzzles: { include: { puzzle: true } } },
		});

		const data = userFromDB?.userPuzzles || [];
		return data;
	}

	return [];
}

export async function createPuzzle(name: string, url: string) {
	// Get session to identify the current user
	const session = await getSession();
	const user = session?.user;
	if (user?.sub) {
		const auth0Sub = user.sub;

		// Find user in the database
		const userFromDB = await prisma.user.findUnique({
			where: { auth0Sub },
		});
		try {
			const newPuzzle = await prisma.puzzle.create({
				data: {
					iconUrl: "https://example.com",
					name: name,
					url: url,
					creatorId: userFromDB?.id,
				},
			});
			// Refresh ui to display new puzzles
			revalidatePath("/");
			return newPuzzle;
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				console.log("prisma error:", error.code);
			}
			throw error;
		}
	} else {
		console.log("auth0 user error");
	}
}

export async function handleNewPuzzleSubmit(formData: FormData) {
	// Get session to identify the current user
	const session = await getSession();
	const user = session?.user;

	if (!user?.sub) {
		// If no session exists or user is not logged in, redirect to login
		redirect("/api/auth/login");
	}

	// Sanitize inputs
	const name = sanitizeInput(formData.get("name") as string);
	const url = sanitizeInput(formData.get("url") as string);

	// Validate url
	if (!isValidURL(url)) {
		console.error("Invalid URL format in handleNewPuzzleSubmit");
		return;
	}

	try {
		const newPuzzle = await createPuzzle(name, url);

		if (newPuzzle?.id) {
			await addPuzzleToUser(newPuzzle.id);
		}
	} catch (error) {
		console.error("Error creating puzzle or adding to user:", error);
	}
}

export async function removePuzzleFromUser(puzzleId: string) {
	// Get session to identify the current user
	const session = await getSession();
	const user = session?.user;

	if (user?.sub) {
		const auth0Sub = user.sub;
		console.log("removePuzzleFromUser ...");

		// Find the user in the database
		const userFromDB = await prisma.user.findUnique({
			where: { auth0Sub },
		});

		// Find user in the database
		if (userFromDB) {
			// Delete the UserPuzzle entry that links user and the puzzle
			await prisma.userPuzzle.deleteMany({
				where: {
					userId: userFromDB.id,
					puzzleId: puzzleId,
				},
			});
		}

		// Check if puzzle created by user, delete from Puzzle table as well
		if (userFromDB) {
			await prisma.puzzle.deleteMany({
				where: {
					// add soft validation
					creatorId: { not: null },
					id: puzzleId,
				},
			});
		}
	}
}

export async function updatePuzzleCompletionStatus(
	puzzleId: string,
	completed: boolean,
) {
	// Get session to identify the current user
	const session = await getSession();
	const user = session?.user;

	if (user?.sub) {
		const auth0Sub = user.sub;

		// Find the user in the database
		const userFromDB = await prisma.user.findUnique({
			where: { auth0Sub },
		});

		if (userFromDB) {
			// Update the UserPuzzle entry's 'completed' status
			await prisma.userPuzzle.updateMany({
				where: {
					userId: userFromDB.id,
					puzzleId: puzzleId,
				},
				data: {
					completed: completed,
				},
			});
		}
	}
}

// UTILS

function sanitizeInput(input: string): string {
	const trimmedInput = input.trim();
	// Basic HTML escaping to prevent XSS (could be expanded)
	const sanitizedInput = trimmedInput
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;");
	return sanitizedInput;
}

function isValidURL(url: string): boolean {
	const urlRegex = /^(https?:\/\/[^\s$.?#].[^\s]*)$/i;
	return urlRegex.test(url);
}
