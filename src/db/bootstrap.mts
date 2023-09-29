import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import touch from 'touch'
import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'


export default async function bootstrap() {
    const __dirname = dirname(fileURLToPath("file://"))
    const file = join(__dirname, 'db.json')
    touch("db.json")
    console.log(file)

    const adapter = new JSONFile(file)
    const defaultData = { posts: [] }
    const db = new Low(adapter, defaultData)

};

bootstrap();