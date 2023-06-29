import App from "../app.js";

export const exit = async () => {
  App.getMessage.sayBuy();
  process.exit();
}