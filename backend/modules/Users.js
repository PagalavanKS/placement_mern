var mdb = require('mongoose)
    var useerSchema=mdb.Schema.pro({
        firstName: String,
        lastName: String,
        email: String,
        phone:Number,
    })
   var user_schema = mdb.model("users", useerSchema)
   module.exports=user_schema;