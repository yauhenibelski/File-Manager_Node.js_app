import path from "path"
import App from "../app.js"

export const up = async () => {
  if (App.dir.current !== App.dir.home) {
    App.dir.current = App.dir.current
      .split(path.sep)
      .slice(0, -1)
      .join(path.sep);
  }
}