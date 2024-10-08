"use server";

import prisma from "@/lib/db";

export async function createPuzzle(formData: FormData) {
	await prisma.puzzle.create({
		data: {
			// add soft validation
			iconUrl: "https://example.com",
			name: formData.get("name") as string,
			url: formData.get("url") as string,
		},
	});
}
