export default function Footer() {
	return (
		<footer className="flex overflow-auto whitespace-nowrap border-t border-gray-200 bg-gray-50">
			<div className="m-auto mt-4 flex w-full max-w-5xl px-4 pb-5 pt-5 sm:px-6 md:px-12 md:pb-9 md:pt-9">
				<div className="flex w-full items-center">
					<a href="/" className="text-xl">
						Puzzle List
					</a>
					<a href="/help" className="ml-10 hover:text-gray-900">
						Help
					</a>
					<a href="/feedback" className="ml-10 hover:text-gray-900">
						Send Feedback
					</a>
					<a href="/disclaimer" className="ml-10 hover:text-gray-900">
						Disclaimer
					</a>
				</div>
			</div>
		</footer>
	);
}
