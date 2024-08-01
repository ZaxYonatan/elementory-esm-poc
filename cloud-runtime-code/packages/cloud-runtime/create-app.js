import {processRequest} from "cloud-runtime-core"
const MODULE_TYPE = process.argv[2] // esm \ common
const USER_CODE_BASE_PATH = `../../../../../user-code-${MODULE_TYPE}`


const handleWebMethodRequest = async (request) => {
    console.log(`handling request using the ${MODULE_TYPE} module type`)
    const modulePath = request.params[0]
    const functionName = request.params[1]
    const args = request.body;
    console.log("processing", {
        modulePath, 
        functionName,
        args
    })
    const result = await processRequest(
        `${USER_CODE_BASE_PATH}/${modulePath}`,
        functionName,
        args
    )
    console.log("multiply result", result)
}


const request = {
    params: ["backend/web-method.web.js", "multiply"],
    body: [3,4]
}

handleWebMethodRequest(request)
