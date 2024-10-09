import type { Metadata } from "next";
import "./globals.css";

import { Roboto_Flex } from "next/font/google";
import Footer from "./_components/footer";
import { UserProvider } from "@auth0/nextjs-auth0/client";
// import TopNav from "./_components/topnav";

const roboto = Roboto_Flex({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Puzzle List - Daily Puzzle Tracker",
	description:
		"Puzzle List provides an easy way to keep track of daily online puzzles to help users stay organized and engaged. Discover new puzzles, enhance problem solving skills, and enjoy a daily dose of fun!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<UserProvider>
				<body className={roboto.className}>
					{/* <TopNav /> */}
					{children}
					<Footer />
				</body>
			</UserProvider>
		</html>
	);
}
