import { Puzzle } from "../../types";
import AddPuzzleButton from "./addPuzzleButton";

interface PuzzleProps {
	puzzles: Puzzle[];
}

const UserPuzzles: React.FC<PuzzleProps> = ({ puzzles }) => {
	return (
		<div
			className="flex w-8/12 flex-col overflow-hidden"
			style={{ maxHeight: "610px" }}
		>
			<div className="mb-2" style={{ fontSize: "18px" }}>
				Your daily puzzles
			</div>
			<ul className="list-disc">
				{[...puzzles].map((puzzle) => (
					<li
						key={puzzle.id}
						className="flex h-14 items-center border-t border-gray-200"
					>
						<div className="flex flex-1 overflow-hidden">
							<div className="mr-3">img</div>
							<div className="flex flex-1">{puzzle.name}</div>
						</div>

						<a
							href={puzzle.url}
							className="flex justify-end text-blue-500 hover:underline"
							style={{ width: "348px" }}
						>
							{puzzle.url}
						</a>
						<div className="ml-6 flex items-center justify-center">
							<AddPuzzleButton puzzleId={puzzle.id} />
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default UserPuzzles;
