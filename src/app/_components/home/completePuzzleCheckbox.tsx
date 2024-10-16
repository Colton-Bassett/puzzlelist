"use client";

interface AddPuzzleButtonProps {
	puzzleId: string;
}

// TODO REFACTOR SO THAT PUZZLEID ACTUALLY MEANS USERPUZZLE.ID ??
// OR ACTUALLY BUILD OUT THIS THING

const CompletePuzzleCheckbox: React.FC<AddPuzzleButtonProps> = ({
	puzzleId,
}) => {
	return (
		<div className="flex w-10 items-center justify-center">
			<input type="checkbox" id={`${puzzleId}`} name="completePuzzle" />
		</div>
	);
};

export default CompletePuzzleCheckbox;
