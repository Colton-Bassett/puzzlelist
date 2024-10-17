import LandingImage from "../_components/landingImage";

const Help = () => {
	return (
		<div className="min-h-screen w-full flex-col">
			<LandingImage />
			<div className="m-auto flex h-full w-full max-w-5xl flex-col px-4 pb-6 text-center sm:px-6 md:px-12">
				<h1 className="text-xl">Help Page</h1>
				<p className="mb-6">
					If you need assistance, here are some helpful resources:
				</p>
				<ul>
					<li>
						<a href="/" className="text-blue-500 hover:underline">
							Puzzle List
						</a>
					</li>
					<li>
						<a href="/feedback" className="text-blue-500 hover:underline">
							Send Feedback
						</a>
					</li>
					<li>
						<a href="/disclaimer" className="text-blue-500 hover:underline">
							Disclaimer
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Help;
