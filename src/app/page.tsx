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

const UserPuzzles: React.FC = () => {
	return (
		<ul className="list-disc">
			{[...puzzles, ...puzzles, ...puzzles].map((puzzle) => (
				<li
					key={puzzle.id}
					className="flex h-14 items-center border-t border-gray-200"
				>
					<div className="flex flex-1 overflow-hidden">
						<div className="mr-3">img</div>
						<div className="flex flex-1">{puzzle.name}</div>
					</div>

					<a
						href={puzzle.url}
						className="flex justify-end text-blue-500 hover:underline"
						style={{ width: "348px" }}
					>
						{puzzle.url}
					</a>
					<span className="flex w-12 items-center justify-center">
						{puzzle.completed ? "✅" : "❌"}
					</span>
				</li>
			))}
		</ul>
	);
};

const MostFollowedPuzzles: React.FC = () => {
	return (
		<ul className="list-disc">
			{puzzles.slice(0, 4).map((puzzle) => (
				<li
					key={puzzle.id}
					className="flex h-24 items-center border-t border-gray-200"
				>
					<div className="flex flex-1 flex-col overflow-hidden">
						<div className="mr-3">img</div>
						<div className="flex flex-1">{puzzle.name}</div>
						<a href={puzzle.url} className="flex text-blue-500 hover:underline">
							{puzzle.url}
						</a>
					</div>

					<span className="flex w-12 items-center justify-center">
						{puzzle.followed ? "✅" : "❌"}
					</span>
				</li>
			))}
		</ul>
	);
};

const RecommendedPuzzles: React.FC = () => {
	return (
		<div className="flex">
			{[...puzzles, puzzles[0]].map((puzzle) => (
				<div
					key={puzzle.id}
					className="h- mb-3 mr-4 mt-1 w-40 rounded-xl border border-gray-200 bg-white"
					style={{ height: "242px" }}
				>
					<div className="flex h-full flex-col px-3 py-2">
						<div className="mr-3">img</div>
						<div className="mb-5 flex">{puzzle.name}</div>
						<div className="flex max-h-28 overflow-hidden">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quam
							quam, sollicitudin vitae
						</div>
						<div className="mt-auto">
							<span className="flex items-center justify-end">+</span>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default function Home() {
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
					<div className="mt-3 flex h-16 w-full items-center rounded-xl border border-gray-200 p-3 pl-5">
						<ListSvg />
						<div className="ml-6 flex-1 flex-col">
							<div className="text-sm">Build a watchlist</div>
							<div className="text-xs">
								Sign in to track DLEs you care about
							</div>
						</div>
						<button>Sign in</button>
					</div>

					<div className="m-auto mt-6 flex w-full max-w-5xl">
						<div
							className="flex w-8/12 flex-col overflow-hidden"
							style={{ maxHeight: "610px" }}
						>
							<div className="mb-2" style={{ fontSize: "18px" }}>
								Your daily puzzles
							</div>
							<UserPuzzles />
						</div>
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

							<div className="mb-4 ml-6 rounded-xl border border-gray-200 p-4">
								<div className="flex flex-col">
									<div className="h-12 text-lg">
										Most followed on Puzzle List
									</div>
									<MostFollowedPuzzles />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-gray-50">
					<div className="m-auto max-w-5xl py-6">
						<section>
							<div className="text-lg">Discover more</div>
							<div className="mb-3 mt-2 flex">
								<div className="mr-2">You may be interested in</div>
								<div>i</div>
							</div>
							<RecommendedPuzzles />
						</section>
					</div>
				</div>
			</main>
		</div>
	);
}
