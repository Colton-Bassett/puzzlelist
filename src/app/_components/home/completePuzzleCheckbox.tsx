"use client";

import { useState } from "react";
import { updatePuzzleCompletionStatus } from "@/actions/actions";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

interface AddPuzzleButtonProps {
	puzzleId: string;
	completed: boolean;
}

const CompletePuzzleCheckbox: React.FC<AddPuzzleButtonProps> = ({
	puzzleId,
	completed,
}) => {
	const [isChecked, setIsChecked] = useState(completed);

	const handleCheckboxChange = async (
		e: React.ChangeEvent<HTMLInputElement>,
	) => {
		const newCompletedStatus = e.target.checked;
		setIsChecked(newCompletedStatus);

		// Call the action to update the completion status
		await updatePuzzleCompletionStatus(puzzleId, newCompletedStatus);
	};

	return (
		<TooltipProvider delayDuration={400}>
			<Tooltip>
				<TooltipTrigger asChild>
					<div className="flex w-10 items-center justify-center">
						<input
							type="checkbox"
							id={`${puzzleId}`}
							name="completePuzzle"
							checked={isChecked}
							onChange={handleCheckboxChange}
							className="h-4 w-4 cursor-pointer"
						/>
					</div>
				</TooltipTrigger>
				<TooltipContent side="bottom" className="text-xs">
					<p>Complete</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};

export default CompletePuzzleCheckbox;
