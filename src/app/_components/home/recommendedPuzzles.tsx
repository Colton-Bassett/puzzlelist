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
					<div className="mb-3 mt-2 flex">
						<div className="mr-2">You may be interested in</div>
						<div>i</div>
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
										<AddPuzzleButton />
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
