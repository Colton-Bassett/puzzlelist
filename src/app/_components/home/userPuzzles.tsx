import { getUserPuzzles } from "@/actions/actions";
import AddPuzzleButton from "./addPuzzleButton";
import CompletePuzzleCheckbox from "./completePuzzleCheckbox";

const UserPuzzles: React.FC = async () => {
	const userPuzzles = await getUserPuzzles();

	return (
		<div className="flex max-h-[610px] w-full flex-col md:w-8/12">
			<div className="mb-2 text-lg">Your daily puzzles</div>
			<ul className="list-disc">
				{userPuzzles.map(({ id, completed, puzzle }) => (
					<li
						key={id}
						className="flex h-14 items-center border-t border-gray-200 hover:bg-gray-50"
					>
						<div className="flex min-w-36">
							<div className="mr-3 flex w-10 items-center justify-center">
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
										d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
									/>
								</svg>
							</div>
							<div className="mr-3 max-w-24 overflow-hidden text-ellipsis whitespace-nowrap">
								{puzzle.name}
							</div>
						</div>
						<div className="flex min-w-20 flex-1 justify-start overflow-hidden text-ellipsis whitespace-nowrap">
							<a
								href={puzzle.url}
								className="flex h-14 w-full items-center text-left text-blue-500 hover:underline"
								target="_blank" // Open new tab
								rel="noopener noreferrer" // Security
							>
								{puzzle.url}
							</a>
						</div>
						<div className="ml-auto flex">
							<CompletePuzzleCheckbox
								puzzleId={puzzle.id}
								completed={completed}
							/>

							{completed}
							<AddPuzzleButton puzzleId={puzzle.id} userPuzzles={userPuzzles} />
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default UserPuzzles;
