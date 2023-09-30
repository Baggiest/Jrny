import { ChildProcess } from "node:child_process"
import path from "node:path"

export default function snip(inputPath: string): string {

    let pathArray: string[] = inputPath.split("/")
    console.log(pathArray)
    pathArray.pop()
    // pathArray.shift()


    return path.join(...pathArray)
};

