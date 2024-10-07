const CreatePuzzleList: React.FC = () => {
	return (
		<div className="mb-4 ml-6 rounded-xl border border-gray-200 p-4">
			<div className="flex">
				<div className="mr-3">Box</div>
				<div>Create a list to view your daily puzzles in one place</div>
			</div>
			<div className="mt-3 flex justify-center rounded-2xl border border-gray-200 p-1">
				<button>+ New list</button>
			</div>
		</div>
	);
};

export default CreatePuzzleList;
