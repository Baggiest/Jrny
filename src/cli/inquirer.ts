import { input } from "@inquirer/prompts"

// small lil module for getting the input

export default async function getInput() {
	const text = await input({ message: "Hows today :3 ->" })
	return text;
};
