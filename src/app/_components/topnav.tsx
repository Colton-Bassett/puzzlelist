import { getSession } from "@auth0/nextjs-auth0";

export default async function TopNav() {
	const session = await getSession();
	const user = session?.user;

	return (
		<nav className="flex h-16 w-full items-center justify-between p-5 px-6 text-xl font-semibold">
			<div className="flex-1">
				<span className="text-gray-600">Puzzle List</span>
			</div>

			{user ? (
				<a href="/api/auth/logout">Logout, {user.name}</a>
			) : (
				<a href="/api/auth/login">Login</a>
			)}
		</nav>
	);
}
