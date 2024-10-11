"use client";

interface AddPuzzleButtonProps {
	puzzleId: string;
}

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
