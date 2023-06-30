import { stat, copyFile, mkdir, readdir } from "fs/promises";
import { createReadStream, createWriteStream } from "fs"
import path from "path";
import { pipeline } from "stream/promises";

export const recursivCopy = async (pathFile: string, copyPathFile: string) => {
  const file = await stat(pathFile);

  if (file.isFile()) {
    await copyFile(pathFile, copyPathFile)
  } else {
    await mkdir(copyPathFile);

    const files = await readdir(pathFile, { withFileTypes: true });

    if (!files.length) return;
    else {
       files.forEach(async (dirent) => {
        const direntPath = path.join(pathFile, dirent.name);
        const direntCopyPath = path.join(copyPathFile, dirent.name);

        dirent.isFile()
          ? await pipeline(
              createReadStream(direntPath),
              createWriteStream(direntCopyPath)
            )
          : await recursivCopy(direntPath, direntCopyPath);
      })
    }
  }
}