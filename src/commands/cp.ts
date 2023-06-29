import { createReadStream, createWriteStream } from "fs";
import { copyFile, mkdir, readdir, stat } from "fs/promises";
import path from "path";
import { pipeline } from "stream/promises";

export const cp = async (value: string) => {
  let [pathFile, copyPathFile ] = value.split(' ');

  if (pathFile === copyPathFile) {
    const newPathCopyFile = copyPathFile.split(path.sep);
    const file = newPathCopyFile.pop();
    const extname = path.extname(pathFile);

    copyPathFile = (await stat(pathFile)).isDirectory()
      ? path.join(path.sep, ...newPathCopyFile ,`${file}_copy`)
      : path.join(path.sep, ...newPathCopyFile, `${file?.replace(extname, '')}_copy${extname}`)
  }

  const copy = async (pathFile: string, copyPathFile: string) => {
    const file = await stat(pathFile);

    if (file.isFile()) {
      await copyFile(pathFile, copyPathFile)
    } else {
      await mkdir(copyPathFile);

      const files = await readdir(pathFile, { withFileTypes: true });

      if (!files.length) {
        return
      } else {
         files.forEach(async (dirent) => {
          dirent.isFile()
            ? await pipeline(
              createReadStream(path.join(pathFile, dirent.name)),
              createWriteStream(path.join(copyPathFile, dirent.name))
            )
            : await copy(path.join(pathFile, dirent.name), path.join(copyPathFile, dirent.name));
        })
      }
    }
  }
  await copy(pathFile, copyPathFile);
}
