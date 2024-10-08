"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createPuzzle(formData: FormData) {
	await prisma.puzzle.create({
		data: {
			// add soft validation
			iconUrl: "https://example.com",
			name: formData.get("name") as string,
			url: formData.get("url") as string,
		},
	});

	// refresh ui to display new puzzles
	revalidatePath("/");
}

// not implemented in UI
export async function editPost(formData: FormData, id: string) {
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
