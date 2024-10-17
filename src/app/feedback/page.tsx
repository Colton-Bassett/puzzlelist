import LandingImage from "../_components/landingImage";

const Feedback = () => {
	return (
		<div className="min-h-screen w-full flex-col">
			<LandingImage />
			<div className="m-auto flex h-full w-full max-w-3xl flex-col px-4 pb-6 text-center sm:px-6 md:px-12">
				<h1 className="mb-6 text-xl">Your Feedback Matters</h1>
				<p className="mb-6">
					We’re dedicated to making our puzzle list app the best it can be. Your
					insights and suggestions are invaluable in shaping our features and
					improvements. Whether you have ideas for new puzzles or want to report
					an issue, we want to hear from you.
				</p>
				<p className="mb-6">
					Together, we can create a fun and engaging experience for all puzzle
					enthusiasts. Your contributions help us create a better experience for
					everyone.
				</p>
				<p className="mb-6">We appreciate your support!</p>
			</div>
		</div>
	);
};

export default Feedback;
