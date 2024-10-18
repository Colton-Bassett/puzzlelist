"use server";

import prisma from "@/lib/db";
import { getSession, Session } from "@auth0/nextjs-auth0";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getDefaultPuzzles() {
	try {
		// Get all puzzles EXCEPT ones a user has created
		const defaultPuzzles = await prisma.puzzle.findMany({
			where: {
				creatorId: null,
			},
		});
		return defaultPuzzles;
	} catch (error) {
		console.error("Error fetching default puzzles:", error);
		// Return an empty array as a fallback
		return [];
	}
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
		console.error("auth0 user not found", session);
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
			console.log(
				`Added puzzle with ID ${puzzleId} to user with ID ${userFromDB.id}.`,
			);
			return { success: true, message: "Puzzle added successfully." };
		} else {
			console.error("User not found in database");
		}
	} catch (error) {
		console.error("Error adding puzzle:", error);
	}
}

export async function getUserPuzzles() {
	try {
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

			// If user is found, return their puzzles
			return userFromDB?.userPuzzles || [];
		}

		// If no user is found, return an empty array
		return [];
	} catch (error) {
		console.error("Error fetching user puzzles:", error);
		return [];
	}
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
				console.error("prisma error:", error.code);
			}
			throw error;
		}
	} else {
		console.error("auth0 user error");
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
	try {
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

			if (userFromDB) {
				// Delete the UserPuzzle entry that links user and the puzzle
				await prisma.userPuzzle.deleteMany({
					where: {
						userId: userFromDB.id,
						puzzleId: puzzleId,
					},
				});

				// Check if puzzle was created by user, then delete from Puzzle table as well
				const puzzleDeleted = await prisma.puzzle.deleteMany({
					where: {
						creatorId: userFromDB.id, // Check if the user is the creator
						id: puzzleId,
					},
				});

				if (puzzleDeleted.count > 0) {
					console.log(`User created puzzle with ID ${puzzleId} deleted.`);
				} else {
					console.log(`Removed default puzzle with ID ${puzzleId}.`);
				}
			} else {
				console.warn(
					`User not found in the database for auth0Sub: ${auth0Sub}`,
				);
			}
		} else {
			console.warn("User session not found.");
		}
	} catch (error) {
		console.error("Error removing puzzle from user:", error);
	}
}

export async function updatePuzzleCompletionStatus(
	puzzleId: string,
	completed: boolean,
) {
	try {
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
				const updateResult = await prisma.userPuzzle.updateMany({
					where: {
						userId: userFromDB.id,
						puzzleId: puzzleId,
					},
					data: {
						completed: completed,
					},
				});

				if (updateResult.count === 0) {
					console.warn(
						`No UserPuzzle entry found for user ${userFromDB.id} and puzzle ${puzzleId}.`,
					);
				} else {
					console.log(
						`Updated completion status for puzzle ${puzzleId} to ${completed}.`,
					);
				}
			} else {
				console.warn(
					`User not found in the database for auth0Sub: ${auth0Sub}`,
				);
			}
		} else {
			console.warn("User session not found.");
		}
	} catch (error) {
		console.error("Error updating puzzle completion status:", error);
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
