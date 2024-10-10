import { Puzzle } from "../../types";
import AddPuzzleButton from "./addPuzzleButton";

interface PuzzleProps {
	puzzles: Puzzle[];
}

const RecommendedPuzzles: React.FC<PuzzleProps> = ({ puzzles }) => {
	return (
		<div className="bg-gray-50">
			<div className="m-auto max-w-5xl py-6">
				<section>
					<div className="text-lg">Discover more</div>
					<div className="mb-3 mt-2 flex items-center">
						<div className="mr-1">You may be interested in</div>
						<div className="flex h-6 w-6 cursor-pointer items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="size-4"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
								/>
							</svg>
						</div>
					</div>
					<div className="flex">
						{[...puzzles].map((puzzle) => (
							<div
								key={puzzle.id + "r"}
								className="h- mb-3 mr-4 mt-1 w-40 rounded-xl border border-gray-200 bg-white"
								style={{ height: "242px" }}
							>
								<div className="flex h-full flex-col px-3 py-2">
									<div className="mr-3">img</div>
									<div className="mb-5 flex">{puzzle.name}</div>
									<div className="flex max-h-28 overflow-hidden">
										{puzzle.description}
									</div>
									<div className="mt-auto flex min-w-full justify-end">
										<AddPuzzleButton puzzleId={puzzle.id} />
									</div>
								</div>
							</div>
						))}
					</div>
				</section>
			</div>
		</div>
	);
};

export default RecommendedPuzzles;
