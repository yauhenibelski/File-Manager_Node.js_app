import { stat } from "fs/promises";
import path from "path";
import { recursiveCopy } from "../utils/recursiveCopy.js";


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
  await recursiveCopy(pathFile, copyPathFile);
}
