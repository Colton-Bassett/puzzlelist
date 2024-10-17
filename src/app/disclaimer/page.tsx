import LandingImage from "../_components/landingImage";

const Disclaimer = () => {
	return (
		<div className="min-h-screen w-full flex-col">
			<LandingImage />
			<div className="m-auto flex h-full w-full max-w-3xl flex-col px-4 pb-6 text-center sm:px-6 md:px-12">
				<h1 className="mb-6 text-xl">Disclaimer</h1>
				<p className="mb-6">
					Welcome to our Puzzle List. We strive to provide a fun and engaging
					experience for all puzzle enthusiasts. However, please be aware of the
					following:
				</p>
				<p className="mb-6">
					The puzzles featured on this platform are added by a variety of
					contributors and may vary in quality and complexity. While we make
					every effort to ensure the accuracy and integrity of the content, we
					cannot guarantee that all puzzles will meet every user's expectations.
				</p>

				<p className="mb-6">
					By using our app, you acknowledge that the puzzles are meant for
					entertainment purposes only and that your experience may differ. We
					appreciate your understanding and encourage you to provide feedback to
					help us improve our offerings.
				</p>

				<p className="mb-6">Thank you for being a part of our community!</p>
			</div>
		</div>
	);
};

export default Disclaimer;
