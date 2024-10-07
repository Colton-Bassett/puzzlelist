import prisma from "@/lib/db";
import RecommendedPuzzles from "./_components/home/recommendedPuzzles";
import MostFollowedPuzzles from "./_components/home/mostFollowedPuzzles";
import UserPuzzles from "./_components/home/userPuzzles";
import UserEngagementPrompt from "./_components/home/userEngagementPrompt";
import CreatePuzzleList from "./_components/home/createPuzzleList";

export default async function Home() {
	const puzzles = await prisma.puzzles.findMany();

	return (
		<div className="">
			<main className="flex h-full w-full flex-col">
				<div className="min-h-full min-w-full">
					<div className="h-20" style={{ backgroundColor: "#F8F9FA" }}></div>
					<div
						className="h-40 bg-bottom bg-no-repeat"
						style={{ backgroundImage: "url(/landingpage.svg)" }}
					></div>
				</div>
				<div className="m-auto flex h-full w-full max-w-5xl flex-col pb-6">
					<UserEngagementPrompt />

					<div className="m-auto mt-6 flex w-full max-w-5xl">
						<UserPuzzles puzzles={puzzles} />
						<div className="w-4/12">
							<CreatePuzzleList />
							<MostFollowedPuzzles puzzles={puzzles} />
						</div>
					</div>
				</div>
				<RecommendedPuzzles puzzles={puzzles} />
			</main>
		</div>
	);
}
