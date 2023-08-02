import { builtinModules } from "module"
import { Handler, Entry } from "../db/handler"

const handler = new Handler

export default async function create(text: string, isEncrypted: boolean, moodLevel: number) {

	const timestamp = Date.now()
	// const object = await handler.read()
	// console.log(Object.keys(object).length)

	const entry: Entry = {
		index: await handler.count() - 1,
		UID: timestamp,
		text: text,
		isEncrypted: isEncrypted,
		moodLevel: moodLevel
	}
	handler.create(entry)
}