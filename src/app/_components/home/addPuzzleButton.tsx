"use client";

import { addPuzzleToUser, removePuzzleFromUser } from "@/actions/actions";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

interface AddPuzzleButtonProps {
	puzzleId: string;
	userPuzzles?: UserPuzzle[];
}

interface UserPuzzle {
	id: string;
	userId: string;
	puzzleId: string;
	completed: boolean;
	puzzle: {
		id: string;
		name: string;
		iconUrl: string;
		url: string;
		description: string | null;
		updatedAt: Date;
		createdAt: Date;
	};
}

const AddPuzzleButton: React.FC<AddPuzzleButtonProps> = ({
	puzzleId,
	userPuzzles,
}) => {
	const isPuzzleJoinIdInUserList = userPuzzles?.some(
		(userPuzzle) => userPuzzle.id === puzzleId,
	);

	const isPuzzleInUserList = userPuzzles?.some(
		(userPuzzle) => userPuzzle.puzzleId === puzzleId,
	);

	return (
		<TooltipProvider delayDuration={400}>
			<Tooltip>
				<div className="">
					{isPuzzleInUserList || isPuzzleJoinIdInUserList ? (
						// puzzle in userList
						<div className="flex w-10 items-center justify-center">
							<TooltipTrigger asChild>
								<button
									className=""
									onClick={() => removePuzzleFromUser(puzzleId)}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
										className="size-6 fill-gray-500 hover:fill-blue-500"
									>
										<path
											fillRule="evenodd"
											d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
											clipRule="evenodd"
										/>
									</svg>
								</button>
							</TooltipTrigger>
							<TooltipContent side="bottom" className="text-xs">
								<p>Unfollow</p>
							</TooltipContent>
						</div>
					) : (
						// puzzle not in userList
						<div className="flex w-10 items-center justify-center">
							<TooltipTrigger asChild>
								<button className="" onClick={() => addPuzzleToUser(puzzleId)}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={2}
										stroke="currentColor"
										className="size-6 stroke-gray-500 hover:stroke-blue-500"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
										/>
									</svg>
								</button>
							</TooltipTrigger>
							<TooltipContent side="bottom" className="text-xs">
								<p>Add</p>
							</TooltipContent>
						</div>
					)}
				</div>
			</Tooltip>
		</TooltipProvider>
	);
};

export default AddPuzzleButton;
