import { PrismaClient } from "@prisma/client"
const db = new PrismaClient();


export interface Entry {
    hash?: string,
    text?: string,
}

export class Handler {

    async create(passedEntry: Entry) {

        db.entry.create({ data: passedEntry })
    }

    async read(key: number) {

        let result = await db.entry.findUnique({
            where: {
                index: key
            }
        })
        return result;
    }

    async count() {

        // returns the number of entries in db
        // return db.count("/entries")
    }
}