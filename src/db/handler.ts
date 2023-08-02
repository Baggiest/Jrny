import { JsonDB, Config } from "node-json-db";

let db = new JsonDB(new Config("entries", true, true, "/"))

export interface Entry {
    UID: number,
    index?: number,
    text?: string,
    isEncrypted?: boolean,
    moodLevel?: number
}

export class Handler {

    async create(entry: Entry) {

        db.push(`/entries`, [entry], false).then(() => {
            if (entry.UID === 0) return;
            console.log(`Created an entry with the ID of ${entry.UID}`)
        })
    }

    async read() {
        let result = await db.getData("entries/");
        return result;
    }

    async count() {
        return db.count("/entries")
    }
}