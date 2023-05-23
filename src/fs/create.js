import { writeFile } from "node:fs";
import { Buffer } from "node:buffer";

const create = async () => {
    const data = new Uint8Array(Buffer.from("I am fresh and young"));
    writeFile("./src/fs/files/fresh.txt", data, (err) => {
        if (err) throw new Error("FS operation failed");
    });
};

await create();
