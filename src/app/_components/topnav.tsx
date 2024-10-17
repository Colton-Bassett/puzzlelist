import { getSession } from "@auth0/nextjs-auth0";

export default async function TopNav() {
	const session = await getSession();
	const user = session?.user;

	return (
		<nav className="flex h-16 w-full items-center justify-between p-5 px-6 font-semibold">
			<div className="flex-1 text-xl">
				<a href="/">Puzzle List</a>
			</div>

			{user ? (
				<a
					href="/api/auth/logout"
					className="rounded-sm p-7 py-2 hover:bg-gray-50"
				>
					Logout, {user.name}
				</a>
			) : (
				<a
					href="/api/auth/login"
					className="rounded-sm bg-blue-500 px-7 py-2 text-sm font-light text-white hover:bg-blue-600"
				>
					Sign in
				</a>
			)}
		</nav>
	);
}
