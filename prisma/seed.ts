import { PrismaClient, Puzzle } from "@prisma/client";
const prisma = new PrismaClient();

const initialPuzzles = [
	{
		iconUrl: "https://example.com",
		name: "Wordle",
		url: "https://nytimes.com/games/wordle",
		description:
			"Guess the hidden word in 6 tries. A new puzzle is available each day.",
	},
	{
		iconUrl: "https://example.com",
		name: "Spelling Bee",
		url: "https://nytimes.com/puzzles/spelling-bee",
		description: "How many words can you make with 7 letters?",
	},
	{
		iconUrl: "https://example.com",
		name: "Connections",
		url: "https://nytimes.com/games/connections",
		description:
			"Group words that share a common thread. A new puzzle is available each day.",
	},
	{
		iconUrl: "https://example.com",
		name: "Daily Dozen",
		url: "https://dailydozentrivia.com",
		description:
			"A daily trivia challenge inspired by The Dozen: Trivia Competition. Come back daily for a new round of trivia!",
	},
	{
		iconUrl: "https://example.com",
		name: "Bandle",
		url: "https://bandle.app",
		description:
			"Daily musical game where you guess the song played with the least musicians playing as possible.",
	},
];
async function main() {
	console.log("Start seeding db ...");
	for (const puzzle of initialPuzzles) {
		const newPuzzle = await prisma.puzzle.create({
			data: puzzle,
		});
		console.log("Created puzzle with id:", `${newPuzzle.id}`);
	}
	console.log("Seeding db finished");
}
main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
