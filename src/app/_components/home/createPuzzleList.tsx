const CreatePuzzleList: React.FC = () => {
	return (
		<div className="mb-4 rounded-xl border border-gray-200 p-4 md:ml-6">
			<div className="flex">
				<div className="mr-3 flex items-center justify-center">
					<div className="rounded-md bg-blue-100 p-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="#1A73E8"
							className="size-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
							/>
						</svg>
					</div>
				</div>
				<div>Create a list to view your daily puzzles in one place</div>
			</div>
			<div className="mt-3 flex justify-center rounded-2xl border border-gray-200 p-1">
				<button>+ New list</button>
			</div>
		</div>
	);
};

export default CreatePuzzleList;
