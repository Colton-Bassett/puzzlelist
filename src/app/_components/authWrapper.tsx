import { getSession } from "@auth0/nextjs-auth0";

export default async function AuthWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	const session = await getSession();

	if (session?.user) {
		return <>{children}</>;
	} else {
		return (
			<div className="flex h-screen w-screen items-start justify-center">
				<span className="m-24 text-2xl">Please Sign In</span>
			</div>
		);
	}
}
