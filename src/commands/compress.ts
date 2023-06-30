import { pipeline } from "stream/promises";
import App from "../app.js";
import { createReadStream, createWriteStream } from "fs";
import { createBrotliCompress } from "zlib";

export const compress = async (value: string) => {
  let [pathFile, compressPathFile ] = value.split(' ');
  if (pathFile === compressPathFile) return App.getMessage.invalidInput();

  try {
    await pipeline(
      createReadStream(pathFile),
      createBrotliCompress(),
      createWriteStream(compressPathFile),
    );
  } catch {
    App.getMessage.invalidInput();
  }
}