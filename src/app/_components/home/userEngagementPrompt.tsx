const UserEngagementPrompt: React.FC = () => {
	return (
		<div className="mt-3 flex h-16 w-full items-center rounded-xl border border-gray-200 p-3 pl-5">
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
			<div className="ml-6 flex-1 flex-col">
				<div className="text-sm">Build a watchlist</div>
				<div className="text-xs">Sign in to track Puzzles you care about</div>
			</div>
			<button>Sign in</button>
		</div>
	);
};

export default UserEngagementPrompt;
