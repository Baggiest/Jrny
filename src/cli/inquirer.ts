import { input } from "@inquirer/prompts"

export default async function getInput() {
	const text = await input({ message: "Hows today :3 ->" })
	return text;
};
