module.exports.postApplication= async (req,res)=>{
    console.log("Body: " + JSON.stringify(req.body,null,2))
   let data = {
        "applications": [
        "fish",
        "user_id",
        "phone_number",
        "message",
        "message_id",
        "status"
    ]
    }

    res.send("Success.")
}