import { Handler, Entry } from "../db/handler"

const handler = new Handler

export default async function create(text: string, isEncrypted: boolean, moodLevel: number) {

	const timestamp = Date.now()
	const entry: Entry = {
		id: timestamp,
		text: text,
		isEncrypted: isEncrypted,
		moodLevel: moodLevel
	}
	handler.create(entry)
}