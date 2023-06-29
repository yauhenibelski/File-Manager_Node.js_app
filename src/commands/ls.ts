import { readdir } from "fs/promises"
import App from "../app.js"

export const ls = async () => {
  try {
    const files = await readdir(App.dir.current, {withFileTypes: true});

    console.table([...files].map((file) => {
      const type = file.isFile() ? 'file' : 'directory';
      return {
        'Name': file.name,
        'Type': type,
      }
    }));
  } catch {
    App.getMessage.failed();
  }
}
