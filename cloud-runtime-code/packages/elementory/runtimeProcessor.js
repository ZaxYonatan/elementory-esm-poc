// const MODULE_TYPE = "esm" // esm \ common
const MODULE_TYPE = "common" // esm \ common
const BASE_USER_CODE_PATH = `../../../user-code-${MODULE_TYPE}`


const runUserCode = async (filePath, methodName, args) => {
    const module = await import(filePath);
    const fn = module[methodName];
    return fn(...args)
}

(async () => {
    const result = await runUserCode(
        `${BASE_USER_CODE_PATH}/web-method.web.js`,
        "multiply",
        [3,4]
    )
    console.log("result", result)
})()
