import prisma from "@/lib/db";
import RecommendedPuzzles from "./_components/home/recommendedPuzzles";
import MostFollowedPuzzles from "./_components/home/mostFollowedPuzzles";
import UserPuzzles from "./_components/home/userPuzzles";
import UserEngagementPrompt from "./_components/home/userEngagementPrompt";
import CreatePuzzleList from "./_components/home/createPuzzleList";
import AuthWrapper from "./_components/authWrapper";

export default async function Home() {
	const puzzles = await prisma.puzzle.findMany();
	// add prisma action to get user puzzles

	return (
		<main className="flex h-full w-full flex-col">
			<AuthWrapper>
				<div className="min-h-full min-w-full">
					<div className="h-20 bg-[#F8F9FA]"></div>
					<div className="h-40 bg-[url(/landingpage.svg)] bg-bottom bg-no-repeat"></div>
				</div>
				<div className="flex items-center justify-center">
					{/* <form
							action={createPuzzle}
							className="flex w-[300px] flex-col gap-y-2"
						>
							<input
								type="text"
								name="name"
								placeholder="Name"
								className="rounded-sm px-2 py-1"
							/>
							<textarea
								name="url"
								rows={5}
								placeholder="Url"
								className="rounded-sm px-2 py-1"
							/>
							<button
								type="submit"
								className="rounded-sm bg-blue-500 py-2 text-white"
							>
								Create puzzle
							</button>
						</form> */}
				</div>
				<div className="m-auto flex h-full w-full max-w-5xl flex-col px-4 pb-6 sm:px-6 md:px-12">
					<UserEngagementPrompt />

					<div className="mt-6 flex w-full flex-col md:flex-row">
						<UserPuzzles puzzles={puzzles} />
						<div className="mt-6 w-full md:mt-0 md:w-4/12">
							<CreatePuzzleList />
							<MostFollowedPuzzles puzzles={puzzles} />
						</div>
					</div>
				</div>
				<RecommendedPuzzles puzzles={puzzles} />
			</AuthWrapper>
		</main>
	);
}
