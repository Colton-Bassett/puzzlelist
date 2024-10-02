export default function TopNav() {
	return (
		<nav className="flex w-full items-center justify-between p-5 px-6 h-16 text-xl font-semibold">
			<div className="flex-1">
				<span className="text-gray-600">Puzzle</span>
				<span className="pl-1 text-gray-600">List</span>
			</div>

			<button>Sign in</button>
		</nav>
	);
}
