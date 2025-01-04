const express = require('express');
require('dotenv').config()
path=require('path')
var cors=require('cors')
const port = process.env.PORT
var mdb = require('mongoose')
var User=require('./user')


let app = express();
app.use(cors())
app.use(express.json())
mdb.connect("mongodb://localhost:27017/placement")
.then(()=>{
    console.log("MongoDB connected successfully")
})
.catch((e)=>{
    console.log(e);
})



app.get('/',(req,res)=>{
    res.send('Hello World!')
})


app.get('/static',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})
app.post('/signup', async(req,res)=>{
    console.log(req.body)
    var {name,email,age,password}=req.body
    console.log(name,email,age)
    try{
        var  newUser=new User({
            name:name,
            email:email,
            age:age,
            Password:password
        })
        const exp = await User.findOne({email})
        if(exp){
            console.log("already exists")
            return res.status(400).json({ error: "User already exists" });
        }
        await newUser.save()
        console.log("user added successfully")
        return res.status(200).json({ message: "User added successfully" });
    }
    catch(e){
        console.log(e)
        return res.status(500).json({ error: "Invalid data" });
    }
    
})
app.get('/users',async(req,res)=>{
    var log =await User.find()
    res.send(log);
})


app.listen(port,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});