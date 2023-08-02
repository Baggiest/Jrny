import { JsonDB, Config } from "node-json-db";

let db = new JsonDB(new Config("entries", true, true, "/"))

export interface Entry {
    id: number,
    text: string,
    isEncrypted: boolean,
    moodLevel?: number
}

export class Handler {

    async create(entry: Entry) {
        db.push(entry.id.toString(), entry).then(() => {
            console.log(`Created an entry with the id of ${entry.id}`)
        })
    }

    async read(id: string) {
        let result = db.getData(id);
        console.log(result)
    }
}