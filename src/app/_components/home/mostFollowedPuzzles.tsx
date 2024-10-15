import { getUserPuzzles } from "@/actions/actions";
import { Puzzle } from "../../types";
import AddPuzzleButton from "./addPuzzleButton";

interface PuzzleProps {
	puzzles: Puzzle[];
}

const MostFollowedPuzzles: React.FC<PuzzleProps> = async ({ puzzles }) => {
	const userPuzzles = await getUserPuzzles();

	return (
		<div className="mb-4 mt-6 rounded-xl border border-gray-200 p-4 md:ml-6 md:mt-0">
			<div className="flex flex-col">
				<div className="text-lg">
					<span className="mb-3 block">Most followed on Puzzle List</span>
				</div>
				<ul className="list-disc">
					{puzzles.slice(0, 4).map((puzzle) => (
						<li
							key={puzzle.id + "m"}
							className="flex h-24 items-center border-t border-gray-200"
						>
							<div className="flex w-3/4 flex-col">
								<div>img</div>
								<div className="overflow-hidden text-ellipsis whitespace-nowrap">
									{puzzle.name}
								</div>
								<a
									href={puzzle.url}
									className="overflow-hidden text-ellipsis whitespace-nowrap text-blue-500 hover:underline"
								>
									{puzzle.url}
								</a>
							</div>

							<div className="flex h-full w-10 flex-1 items-center justify-end">
								<AddPuzzleButton
									puzzleId={puzzle.id}
									userPuzzles={userPuzzles}
								/>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default MostFollowedPuzzles;
