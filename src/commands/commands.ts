import { cd } from "./cd.js";
import { exit } from "./exit.js";
import { up } from "./up.js";
import { ls } from "./ls.js";
import { cat } from "./cat.js";
import { add } from "./add.js";
import { rn } from "./rn.js";
import { cp } from "./cp.js";

export const commands = {
  _commands: {
    '.exit': exit,
    up,
    cd,
    ls,
    cat,
    add,
    rn,
    cp,
    // mv,
    // rm,
    // os,
    // hash,
    // compress,
    // decompress,
  },
  get(name: string){
    return Object.getOwnPropertyDescriptor(this._commands, name)?.value;
  }
}