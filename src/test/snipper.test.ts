import { test, expect } from "vitest";
import snip from "../db/snipper";

let testPath = "/home/badam/tss/node/file.json"

test("Snipping a file path", () => {
    expect(snip(testPath)).toEqual("home/badam/tss/node");
});
