"use client";

import { addPuzzleToUser } from "@/actions/actions";

export function CButton() {
	return (
		<button
			className="rounded-sm bg-blue-500 p-4 py-2 text-white"
			onClick={() =>
				addPuzzleToUser(
					"google-oauth2|115262421356759644142",
					"cm22gqtbu00005q0t0zjwfute",
				)
			}
		>
			Add Puzzle
		</button>
	);
}
