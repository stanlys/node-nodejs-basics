import { existsSync } from "node:fs";
import { readdir, rm, mkdir, copyFile } from "node:fs/promises";

const copy = async () => {
    const source_path = "./src/fs/files";
    const dest_path = "./src/fs/files_copy";
    if (existsSync(dest_path)) await rm(dest_path, { recursive: true });
    await mkdir(dest_path);
    const files = await readdir("./src/fs/files");
    for (const file of files) {
        copyFile(`${source_path}/${file}`, `${dest_path}/${file}`);
    }
};

await copy();
