import { Handler } from "./handler"
import { Entry } from "./handler";

const handler = new Handler;

export default async function bootstrap() {
    try {
        // node-json-db doesnt like it when u call a count
        // function on an empty db, so we just do this
        // adding a boilerplate record
        await handler.count()
    }
    catch {

        let boilerplate: Entry = {
            text: "init",
            UID: 0,
        }

        handler.create(boilerplate).then(() => {
            console.log("\ninitialized the DB\n press any key for the prompt to appear again \n its a first time quirk")
        })
    }
};
