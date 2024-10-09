import { PrismaClient, Puzzle } from "@prisma/client";
const prisma = new PrismaClient();

const initialPuzzles = [
	{
		iconUrl: "https://example.com",
		name: "Wordle",
		url: "https://www.nytimes.com/games/wordle/index.html",
		description:
			"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
	},
	{
		iconUrl: "https://example.com",
		name: "Bandle",
		url: "https://bandle.app",
		description:
			"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
	},
	{
		iconUrl: "https://example.com",
		name: "PokeDoku",
		url: "https://www.nytimes.com/games/wordle/index.html",
		description:
			"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
	},
	{
		iconUrl: "https://example.com",
		name: "Spelling Bee",
		url: "https://www.nytimes.com/puzzles/spelling-bee",
		description:
			"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
	},
	{
		iconUrl: "https://example.com",
		name: "Connections",
		url: "https://www.nytimes.com/games/connections",
		description:
			"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
	},
];
async function main() {
	console.log("Start seeding ...");
	for (const puzzle of initialPuzzles) {
		const newPuzzle = await prisma.puzzle.create({
			data: puzzle,
		});
		console.log("Created puzzle with id:", `${newPuzzle.id}`);
	}
	console.log("Seeding finished");
	// const wordle = await prisma.puzzle.upsert({
	// 	where: { id: "" },
	// 	update: {},
	// 	create: {
	// 		iconUrl: "https://example.com",
	// 		name: "Wordle",
	// 		url: "https://www.nytimes.com/games/wordle/index.html",
	// 	},
	// });
	// console.log({ wordle });
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
