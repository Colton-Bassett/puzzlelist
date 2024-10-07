import { Puzzle } from "../../types";
import AddPuzzleButton from "./addPuzzleButton";

interface PuzzleProps {
	puzzles: Puzzle[];
}

const MostFollowedPuzzles: React.FC<PuzzleProps> = ({ puzzles }) => {
	return (
		<div className="mb-4 ml-6 rounded-xl border border-gray-200 p-4">
			<div className="flex flex-col">
				<div className="h-12 text-lg">Most followed on Puzzle List</div>
				<ul className="list-disc">
					{puzzles.slice(0, 4).map((puzzle) => (
						<li
							key={puzzle.id + "m"}
							className="flex h-24 items-center border-t border-gray-200"
						>
							<div className="flex flex-1 flex-col overflow-hidden">
								<div className="mr-3">img</div>
								<div className="flex flex-1">{puzzle.name}</div>
								<a
									href={puzzle.url}
									className="flex text-blue-500 hover:underline"
								>
									{puzzle.url}
								</a>
							</div>

							<div className="flex w-12 items-center justify-center">
								<AddPuzzleButton />
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default MostFollowedPuzzles;
