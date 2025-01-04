var mdb=require('mongoose')
var userSchema= mdb.Schema({
    name:String,
    email:String,
    age:Number
})
 var user_schema=mdb.model("user",userSchema)
module.exports=user_schema