#! /usr/bin/env node
// routes the command based on the provided flag 

import create from "./utils/create";
import getInput from "./cli/inquirer";
import bootstrap from "./db/bootstrap";

let inputArray: string[] = process.argv.slice(2);
bootstrap()

switch (inputArray[0]) {

    case "new":
        // create entry
        getInput().then((text) => {
            console.log("noted!");
            create(text, false, 1);
        })
        break;

    case "delete":
        // destroy entry
        break;

    case "edit":
        // update entry
        break;

    case "read":
        // read entry 
        break;

    default:
        console.log("a valid flag wasn't provided")
}