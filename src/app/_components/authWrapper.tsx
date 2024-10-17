export default async function AuthWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
