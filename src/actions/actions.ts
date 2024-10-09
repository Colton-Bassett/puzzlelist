"use server";

import prisma from "@/lib/db";
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

// not implemented in UI
export async function deletePuzzle(id: string) {
	await prisma.puzzle.delete({ where: { id } });
}
