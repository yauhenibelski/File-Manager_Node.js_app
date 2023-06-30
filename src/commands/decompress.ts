import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream/promises";
import { createBrotliDecompress} from "zlib";
import App from "../app.js";

export const decompress = async (value: string) => {
  let [deCompressPathFile, pathFile] = value.split(' ');
  if (pathFile === deCompressPathFile) return App.getMessage.invalidInput();

  try {
    await pipeline(
      createReadStream(deCompressPathFile),
      createBrotliDecompress(),
      createWriteStream(pathFile)
    );
  } catch {
    App.getMessage.invalidInput();
  }
}