import App from "../app.js";
import { recursivCopy } from "../utils/recursivCopy.js";
import { rm } from "fs/promises";

export const mv = async (value: string) => {
  let [pathFile, copyPathFile ] = value.split(' ');

  if (pathFile === copyPathFile) {
    return App.getMessage.invalidInput();
  }
  await recursivCopy(pathFile, copyPathFile);

  await rm(pathFile);
}