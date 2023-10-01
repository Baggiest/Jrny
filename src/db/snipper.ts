// input abc/def/g/text.file 
// output abc/def/g/

import path from "node:path"

export default function snip(inputPath: string): string {

    let pathArray: string[] = inputPath.split("/")

    pathArray = pathArray.slice(-1)
    pathArray.pop()
    console.log(pathArray)

    return path.join(...pathArray)
};

