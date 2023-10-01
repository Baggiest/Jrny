import { JsonDB, Config } from "node-json-db";
import snip from "./snipper";

let db_path = snip(process.argv[1])
let db = new JsonDB(new Config("./" + db_path + "/db.json", true, true, "/"))

console.log("./" + db_path + "/db.json")
// console.log(snip(process.argv[1]));

export interface Entry {
    UID: number,
    index?: number,
    text?: string,
    isEncrypted?: boolean,
    moodLevel?: number
}

export class Handler {

    async create(entry: Entry) {

        // creates a new entry
        // the if statement is there to coverup for
        // the bootstrap() function quirk
        
        db.push(`/entries`, [entry], false).then(() => {
            if (entry.UID === 0) return;
            console.log(`Created an entry with the ID of ${entry.UID}`)
        })
    }

    async read() {

        // returns content part of the entry object
        let result = await db.getData("entries/");
        return result;
    }

    async count() {

        // returns the number of entries in db
        return db.count("/entries")
    }
}