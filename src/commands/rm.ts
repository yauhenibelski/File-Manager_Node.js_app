import App from "../app.js";

export const rm = async (rmPath: string) => {
  try {
    await rm(rmPath);
  } catch {
    App.getMessage.invalidInput();
  }
}