"use client";

import { addPuzzleToUser } from "@/actions/actions";

export function CButton() {
	return (
		<button
			className=""
			onClick={() =>
				addPuzzleToUser(
					"google-oauth2|115262421356759644142",
					"cm22gqtbu00005q0t0zjwfute",
				)
			}
		>
			Click me{" "}
		</button>
	);
}
