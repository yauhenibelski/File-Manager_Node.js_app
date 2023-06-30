import { cd } from "./cd.js";
import { exit } from "./exit.js";
import { up } from "./up.js";
import { ls } from "./ls.js";
import { cat } from "./cat.js";
import { add } from "./add.js";
import { rn } from "./rn.js";
import { cp } from "./cp.js";
import { mv } from "./mv.js";
import { rm } from "./rm.js";
import { os} from "./os.js";
import { hash } from "./hash.js";
import { compress } from "./compress.js";
import { decompress } from "./decompress.js";

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
    mv,
    rm,
    os,
    hash,
    compress,
    decompress,
  },
  get(name: string){
    return Object.getOwnPropertyDescriptor(this._commands, name)?.value;
  }
}