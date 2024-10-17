import { getSession } from "@auth0/nextjs-auth0";

export default async function UserEngagementPrompt() {
	const session = await getSession();
	const user = session?.user;

	return (
		<div className="h-18 mt-3 flex w-full items-center rounded-xl border border-gray-200 p-3 pl-5 sm:h-16">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="#1B66C9"
				className="size-6"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
				/>
			</svg>
			{user ? (
				<div className="ml-6 flex-1 flex-col">
					<div className="text-sm">Build a checklist</div>
					<div className="text-xs">Track the daily puzzles you care about</div>
				</div>
			) : (
				<div>
					<div className="ml-6 flex-1 flex-col">
						<div className="text-sm">Build a checklist</div>
						<div className="text-xs">
							Sign in to track Puzzles you care about
						</div>
					</div>
					<button className="rounded-sm bg-blue-500 px-6 py-2 text-sm font-light text-white hover:bg-blue-600">
						Sign in
					</button>
				</div>
			)}
		</div>
	);
}
