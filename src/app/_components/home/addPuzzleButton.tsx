"use client";

import { addPuzzleToUser } from "@/actions/actions";

export default function AddPuzzleButton() {
	return (
		<button
			className=""
			onClick={() =>
				addPuzzleToUser(
					// "google-oauth2|115262421356759644142",
					"cm22gqtbu00005q0t0zjwfute",
				)
			}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="size-6"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
				/>
			</svg>
		</button>
	);
}
