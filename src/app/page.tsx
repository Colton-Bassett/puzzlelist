import prisma from "@/lib/db";
import RecommendedPuzzles from "./_components/home/recommendedPuzzles";
import MostFollowedPuzzles from "./_components/home/mostFollowedPuzzles";
import UserPuzzles from "./_components/home/userPuzzles";
import UserEngagementPrompt from "./_components/home/userEngagementPrompt";

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
							<div className="mb-4 ml-6 rounded-xl border border-gray-200 p-4">
								<div className="flex">
									<div className="mr-3">Box</div>
									<div>
										Create a list to view your daily puzzles in one place
									</div>
								</div>
								<div className="mt-3 flex justify-center rounded-2xl border border-gray-200 p-1">
									<button>+ New list</button>
								</div>
							</div>
							<MostFollowedPuzzles puzzles={puzzles} />
						</div>
					</div>
				</div>
				<RecommendedPuzzles puzzles={puzzles} />
			</main>
		</div>
	);
}
