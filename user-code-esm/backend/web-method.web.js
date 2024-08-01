import {esmModuleName} from "an-esm-module"
import {cjsModuleName} from "a-cjs-module"

const multiply = (a, b) => {
    console.log(`both ${esmModuleName} and ${cjsModuleName}, imported successfully`) 
    return a * b
 }

export {
  multiply
 }