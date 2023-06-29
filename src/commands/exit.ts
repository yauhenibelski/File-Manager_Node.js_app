import App from "../app.js";

export function exit() {
  process.stdout.write(`Thank you for using File Manager, ${App.userName}, goodbye!`);
  process.exit();
}