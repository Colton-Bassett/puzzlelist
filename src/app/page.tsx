import ListSvg from "./_components/listsvg";

interface Puzzle {
	id: string;
	icon_url: string;
	name: string;
	url: string;
	followed: boolean;
	completed: boolean;
}

const puzzles: Puzzle[] = [
	{
		id: "1",
		icon_url: "https://example.com/icon1.png",
		name: "Puzzle One",
		url: "https://example.com/task1",
		followed: false,
		completed: false,
	},
	{
		id: "2",
		icon_url: "https://example.com/icon2.png",
		name: "Puzzle Two",
		url: "https://example.com/task2",
		followed: false,
		completed: true,
	},
	{
		id: "3",
		icon_url: "https://example.com/icon3.png",
		name: "Puzzle Three",
		url: "https://example.com/task3",
		followed: false,
		completed: false,
	},
	{
		id: "4",
		icon_url: "https://example.com/icon4.png",
		name: "Puzzle Four",
		url: "https://example.com/task4",
		followed: false,
		completed: true,
	},
	{
		id: "5",
		icon_url: "https://example.com/icon5.png",
		name: "Puzzle Five",
		url: "https://example.com/task5",
		followed: false,
		completed: false,
	},
];

const PuzzleList: React.FC = () => {
	return (
		<ul className="list-disc">
			{[...puzzles, ...puzzles, ...puzzles].map((puzzle) => (
				<li
					key={puzzle.id}
					className="flex items-center border-t border-gray-200 h-14"
				>
					<div className="flex flex-1 overflow-hidden">
						<div className="mr-3">img</div>
						<div className="flex flex-1">{puzzle.name}</div>
					</div>

					<a
						href={puzzle.url}
						className="flex justify-end text-blue-500 hover:underline "
						style={{ width: "348px" }}
					>
						{puzzle.url}
					</a>
					<span className="flex justify-center items-center w-12">
						{puzzle.completed ? "✅" : "❌"}
					</span>
				</li>
			))}
		</ul>
	);
};

const MostFollowedList: React.FC = () => {
	return (
		<ul className="list-disc">
			{puzzles.slice(0, 4).map((puzzle) => (
				<li
					key={puzzle.id}
					className="flex items-center border-t border-gray-200 h-24"
				>
					<div className="flex flex-1 flex-col overflow-hidden">
						<div className="mr-3">img</div>
						<div className="flex flex-1">{puzzle.name}</div>
						<a
							href={puzzle.url}
							className="flex text-blue-500 hover:underline "
						>
							{puzzle.url}
						</a>
					</div>

					<span className="flex justify-center items-center w-12">
						{puzzle.followed ? "✅" : "❌"}
					</span>
				</li>
			))}
		</ul>
	);
};

export default function Home() {
	return (
		<div className="font-[family-name:var(--font-geist-sans)]">
			<main className="flex h-full w-full flex-col">
				<div className="min-h-full min-w-full">
					<div
						className="h-20"
						style={{ backgroundColor: "#F8F9FA" }}
					></div>
					<div
						className="bg-bottom bg-no-repeat h-40"
						style={{ backgroundImage: "url(/landingpage.svg)" }}
					></div>
				</div>
				<div className="flex h-full flex-col max-w-5xl w-full m-auto">
					<div className="flex w-full items-center border border-gray-200 mt-3 p-3 pl-5 rounded-xl h-16">
						<ListSvg />
						<div className="flex-1 ml-6 flex-col">
							<div className="text-sm">Build a watchlist</div>
							<div className="text-xs">
								Sign in to track DLEs you care about
							</div>
						</div>
						<button>Sign in</button>
					</div>

					<div className="flex max-w-5xl w-full m-auto mt-6">
						<div
							className="flex w-8/12 flex-col overflow-hidden"
							style={{ maxHeight: "610px" }}
						>
							<div className="mb-2" style={{ fontSize: "18px" }}>
								Your daily puzzles
							</div>
							<PuzzleList />
						</div>
						<div className="w-4/12">
							<div className="border border-gray-200 rounded-xl p-4 ml-6 mb-4">
								<div className="flex">
									<div className="mr-3">Box</div>
									<div>
										Create a list to view your daily puzzles
										in one place
									</div>
								</div>
								<div className="border border-gray-200 mt-3 p-1 rounded-2xl flex justify-center">
									<button>+ New list</button>
								</div>
							</div>

							<div className="border border-gray-200 rounded-xl p-4 ml-6 mb-4">
								<div className="flex flex-col">
									<div
										className="h-12"
										style={{ fontSize: "18px" }}
									>
										Most followed on Puzzle List
									</div>
									<MostFollowedList />
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
			{/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						aria-hidden
						src="https://nextjs.org/icons/file.svg"
						alt="File icon"
						width={16}
						height={16}
					/>
					Learn
				</a>
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						aria-hidden
						src="https://nextjs.org/icons/window.svg"
						alt="Window icon"
						width={16}
						height={16}
					/>
					Examples
				</a>
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						aria-hidden
						src="https://nextjs.org/icons/globe.svg"
						alt="Globe icon"
						width={16}
						height={16}
					/>
					Go to nextjs.org →
				</a>
			</footer> */}
		</div>
	);
}
