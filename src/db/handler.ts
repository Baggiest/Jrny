import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'



export interface Entry {    
    UID: number,
    index?: number,
    text?: string,
    isEncrypted?: boolean,
    moodLevel?: number
}

export class Handler {

    async write(entry: Entry) {

    }

    async read() {

    }

    async count() {

    }
}