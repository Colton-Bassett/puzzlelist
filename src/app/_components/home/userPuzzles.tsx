import { getUserPuzzles } from "@/actions/actions";
import { Puzzle } from "../../types";
import AddPuzzleButton from "./addPuzzleButton";
import CompletePuzzleCheckbox from "./completePuzzleCheckbox";

interface PuzzleProps {
	puzzles: Puzzle[];
}

const UserPuzzles: React.FC<PuzzleProps> = async ({}) => {
	const userPuzzles = await getUserPuzzles();

	return (
		<div className="flex max-h-[610px] w-8/12 flex-col overflow-hidden">
			<div className="mb-2 text-lg">Your daily puzzles</div>
			<ul className="list-disc">
				{userPuzzles.map(({ id, completed, puzzle }) => (
					<li
						key={id}
						className="flex h-14 items-center border-t border-gray-200"
					>
						<div className="flex flex-1 overflow-hidden">
							<div className="mr-3">img</div>
							<div className="flex flex-1">{puzzle.name}</div>
						</div>

						<a
							href={puzzle.url}
							className="flex w-[348px] justify-end text-blue-500 hover:underline"
						>
							{puzzle.url}
						</a>
						<div className="ml-6 flex items-center justify-center">
							<AddPuzzleButton puzzleId={id} userPuzzles={userPuzzles} />
						</div>
						<div className="ml-6 flex items-center justify-center">
							<CompletePuzzleCheckbox puzzleId={id} />
							{/* placeholder, delete later v */}
							{completed}
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default UserPuzzles;
