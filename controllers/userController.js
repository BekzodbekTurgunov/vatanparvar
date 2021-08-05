const Ajv = require("ajv")
const ajv = new Ajv()
const schema = {
    type: "object",
    properties: {
        foo: {type: "integer"},
        bar: {type: "string"}
    },
    required: ["foo"],
    additionalProperties: false
}
module.exports.getUsers = async (req,res)=>{
    res.send('success')
}

module.exports.postUsers = async (req,res)=>{
    const validate = ajv.compile(schema)
    const data = req.body || {}
    console.log("Data: " + JSON.stringify(req.params,null,2))
    const valid = validate(data)
    if (!valid) console.log(validate.errors)
    res.send('success')
}