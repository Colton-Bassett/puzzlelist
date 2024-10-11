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
						<div className="flex max-w-36 flex-1">
							<div className="mr-3 w-7">img</div>
							<div className="mr-3 max-w-24 overflow-hidden text-ellipsis whitespace-nowrap">
								{puzzle.name}
							</div>
						</div>
						<div className="flex flex-1 justify-start">
							<a
								href={puzzle.url}
								className="min-w-28 max-w-[224px] overflow-hidden text-ellipsis whitespace-nowrap text-right text-blue-500 hover:underline"
							>
								{puzzle.url}
							</a>
						</div>
						<AddPuzzleButton puzzleId={id} userPuzzles={userPuzzles} />

						<CompletePuzzleCheckbox puzzleId={id} />

						{completed}
					</li>
				))}
			</ul>
		</div>
	);
};

export default UserPuzzles;
