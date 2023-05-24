import { copyFile, constants } from "node:fs/promises";
import { existsSync } from "node:fs";

const BASE = "./src/fs/files/";

const rename = async () => {
    if (!existsSync(`${BASE}wrongFilename.txt`)) {
        throw new Error("FS operation failed");
    }
    try {
        await copyFile(`${BASE}wrongFilename.txt`, `${BASE}properFilename.md`, constants.COPYFILE_EXCL);
    } catch {
        throw new Error("FS operation failed");
    }
};

await rename();
