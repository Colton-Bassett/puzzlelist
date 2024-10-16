"use server";

import prisma from "@/lib/db";
import { getSession } from "@auth0/nextjs-auth0";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";

// USER

export async function createUser() {
	// runs after auth0 sign in success
	// how should the logic be?
	// goal = link auth0 user to their postgres puzzlelist that's associated with their auth0 id
	// ACTIONS
	// add self-authored puzzles
	// delete self-authored puzzles
	// add existing puzzles
	// remove existing puzzles
}

export async function addPuzzleToUser(puzzleId: string) {
	// todo add error handling on if adding existing user, puzzle relationship
	const session = await getSession();
	const user = session?.user;

	if (user?.sub) {
		const auth0Sub = user.sub;
		console.log("addPuzzleToUser...");

		const userFromDB = await prisma.user.findUnique({
			where: { auth0Sub },
		});

		if (userFromDB) {
			await prisma.userPuzzle.create({
				data: {
					userId: userFromDB.id,
					puzzleId: puzzleId,
				},
			});
		}
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

// PUZZLE
export async function createPuzzle(formData: FormData) {
	try {
		await prisma.puzzle.create({
			data: {
				// add soft validation
				iconUrl: "https://example.com",
				name: formData.get("name") as string,
				url: formData.get("url") as string,
			},
		});
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			console.log("Prisma error:", error.code);
		}
		throw error;
	}

	// refresh ui to display new puzzles
	revalidatePath("/");
}

// not implemented in UI
export async function editPuzzle(formData: FormData, id: string) {
	await prisma.puzzle.update({
		where: { id },
		data: {
			iconUrl: formData.get("iconUrl") as string,
			name: formData.get("name") as string,
			url: formData.get("url") as string,
		},
	});
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
	}
}
