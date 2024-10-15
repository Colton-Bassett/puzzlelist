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
		<div className="flex max-h-[610px] w-full flex-col overflow-hidden md:w-8/12">
			<div className="mb-2 text-lg">Your daily puzzles</div>
			<ul className="list-disc">
				{userPuzzles.map(({ id, completed, puzzle }) => (
					<li
						key={id}
						className="flex h-14 items-center border-t border-gray-200"
					>
						<div className="flex min-w-36">
							<div className="mr-3 w-7">img</div>
							<div className="mr-3 max-w-24 overflow-hidden text-ellipsis whitespace-nowrap">
								{puzzle.name}
							</div>
						</div>
						<div className="flex min-w-20 flex-1 justify-start overflow-hidden text-ellipsis whitespace-nowrap">
							<a
								href={puzzle.url}
								className="w-full text-left text-blue-500 hover:underline"
							>
								{puzzle.url}
							</a>
						</div>
						<div className="ml-auto flex">
							<AddPuzzleButton puzzleId={id} userPuzzles={userPuzzles} />

							<CompletePuzzleCheckbox puzzleId={id} />

							{completed}
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default UserPuzzles;
