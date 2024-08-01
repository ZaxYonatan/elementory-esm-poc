const {cjsModuleName} = require("a-cjs-module");

const multiply = (a, b) => { 
    console.log(cjsModuleName, "imported successfully") 
    return a * b
 }

 module.exports = {
  multiply
 }