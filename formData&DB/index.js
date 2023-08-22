const express = require('express');
const {connect,User}=require('./db');
const cors = require('cors');


const app = express();


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended:true}))


connect();

app.post(`/`, async (req, res) =>{
    try{
        const user=await new User(req.body)
        console.log(req.body)
        await user.save()
        return res.status(201).json({msg:"successfully created user",user})
    }
    catch(err){
        return res.status(500).json({msg:"error creating user message:"+err.message})
    }
})

app.listen(5000,()=>{
    console.log("listening on 5000")
})