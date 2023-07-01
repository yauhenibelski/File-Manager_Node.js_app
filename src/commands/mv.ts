import App from "../app.js";
import { recursiveCopy } from "../utils/recursiveCopy.js";
import { rm } from "fs/promises";

export const mv = async (value: string) => {
  let [pathFile, copyPathFile ] = value.split(' ');

  if (pathFile === copyPathFile) {
    return App.getMessage.invalidInput();
  }
  await recursiveCopy(pathFile, copyPathFile);

  await rm(pathFile);
}