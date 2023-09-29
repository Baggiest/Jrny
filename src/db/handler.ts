import { PrismaClient } from "@prisma/client"
const db = new PrismaClient();


export interface Entry {
    text?: string,
}

export class Handler {

    async create(passedEntry: Entry) {
    }

    async read(key: number) {
    }

    async count() {

        // returns the number of entries in db
        // return db.count("/entries")
    }
}