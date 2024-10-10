"use client";

interface AddPuzzleButtonProps {
	puzzleId: string;
}

const CompletePuzzleCheckbox: React.FC<AddPuzzleButtonProps> = ({
	puzzleId,
}) => {
	return <input type="checkbox" id={`${puzzleId}`} name="completePuzzle" />;
};

export default CompletePuzzleCheckbox;
