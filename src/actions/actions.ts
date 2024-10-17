"use server";

import prisma from "@/lib/db";
import { getSession } from "@auth0/nextjs-auth0";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// USER

export async function getDefaultPuzzles() {
	// get all puzzles EXCEPT ones a user has created
	const defaultPuzzles = await prisma.puzzle.findMany({
		where: {
			// add soft validation
			creatorId: null,
		},
	});
	return defaultPuzzles;
}

export async function createUser() {
	// tbd
}

// export async function addPuzzleToUser(puzzleId: string) {
// 	// todo add error handling on if adding existing user, puzzle relationship
// 	const session = await getSession();
// 	const user = session?.user;

// 	if (user?.sub) {
// 		const auth0Sub = user.sub;
// 		console.log("addPuzzleToUser...");

// 		const userFromDB = await prisma.user.findUnique({
// 			where: { auth0Sub },
// 		});

// 		if (userFromDB) {
// 			await prisma.userPuzzle.create({
// 				data: {
// 					userId: userFromDB.id,
// 					puzzleId: puzzleId,
// 				},
// 			});
// 		}
// 	}
// }

export async function addPuzzleToUser(puzzleId: string) {
	// Get the session to identify the current user
	const session = await getSession();
	const user = session?.user;

	if (!user?.sub) {
		// If no session exists or user is not logged in, redirect to login
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
	const session = await getSession();
	const user = session?.user;

	if (user?.sub) {
		const auth0Sub = user.sub;

		const userFromDB = await prisma.user.findUnique({
			where: { auth0Sub },
			include: { userPuzzles: { include: { puzzle: true } } },
		});

		const data = userFromDB?.userPuzzles || [];
		return data;
	}

	return [];
}

export async function createPuzzle(formData: FormData) {
	// Get session to identify the current user
	const session = await getSession();
	const user = session?.user;
	if (user?.sub) {
		const auth0Sub = user.sub;

		// Find the user in the database
		const userFromDB = await prisma.user.findUnique({
			where: { auth0Sub },
		});
		try {
			const newPuzzle = await prisma.puzzle.create({
				data: {
					// add soft validation
					iconUrl: "https://example.com",
					name: formData.get("name") as string,
					url: formData.get("url") as string,
					creatorId: userFromDB?.id,
				},
			});
			// refresh ui to display new puzzles
			revalidatePath("/");
			return newPuzzle;
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				console.log("Prisma error:", error.code);
			}
			throw error;
		}
	} else {
		console.log("user sub error");
	}
}

export async function handleNewPuzzleSubmit(formData: FormData) {
	const session = await getSession();
	const user = session?.user;

	if (!user?.sub) {
		// If no session exists or user is not logged in, redirect to login
		redirect("/api/auth/login");
	}
	try {
		const newPuzzle = await createPuzzle(formData);

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
		console.log("removePuzzleFromUser...");

		// Find the user in the database
		const userFromDB = await prisma.user.findUnique({
			where: { auth0Sub },
		});

		console.log(userFromDB?.id, puzzleId);

		if (userFromDB) {
			// Delete the UserPuzzle entry that links the user and the puzzle
			await prisma.userPuzzle.deleteMany({
				where: {
					userId: userFromDB.id,
					puzzleId: puzzleId,
				},
			});
		}

		// check puzzle creatorId !== null, delete from Puzzle table as well
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
					completed: completed, // Update the completion status
				},
			});
		}
	}
}
