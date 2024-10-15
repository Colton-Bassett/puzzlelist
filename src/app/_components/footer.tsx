export default function Footer() {
	return (
		<div className="flex overflow-auto whitespace-nowrap border-t border-gray-200 bg-gray-50">
			<footer className="m-auto mt-4 flex w-full max-w-5xl px-12 pb-5 pt-5 md:pb-9 md:pt-9">
				<div className="flex w-full items-center">
					<a href="/" className="text-xl">
						<span className="text-gray-600">Puzzle</span>
						<span className="pl-1 text-gray-600">List</span>
					</a>
					<a href="/" className="ml-10">
						Help
					</a>
					<a href="/" className="ml-10">
						Send Feedback
					</a>
					<a href="/" className="ml-10">
						Disclaimer
					</a>
				</div>
			</footer>
		</div>
	);
}
