import oS from "os";
import App from "../app.js";

export const os = async (prefix: '--EOL' | '--cpus' | '--homedir' | '--username' | '--architecture') => {
  const options = {
    '--EOL': JSON.stringify(oS.EOL),
    '--cpus': oS.cpus(),
    '--homedir': oS.homedir(),
    '--username': oS.userInfo().username,
    '--architecture': oS.arch(),
  };
  if (options[prefix]) {
    console.log(options[prefix]);
  } else {
    App.getMessage.invalidInput();
  }
}