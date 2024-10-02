import ListSvg from "./_components/listsvg";

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
				<div className="flex h-full max-w-5xl w-full px-12 pb-6 m-auto ">
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
				</div>
				<div className="flex">
					<div className="w-8/12 border border-gray-200"></div>
					<div className="w-4/12 border border-gray-200"></div>
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
