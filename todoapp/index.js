const express = require(`express`)
const cors = require('cors')
//server variable
const app = express()

// configurating middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended:true}))


//data to be sent to clients
const { todoArray}=require('./todoList')


//your routes

app.get(`/todos`, async(req,res)=>{
    try{
        return res.status(200).json(todoArray)
    }
    catch(err){
        return res.status(500).json(err.message)
    }
})


app.listen(5000, ()=>{console.log('listening on port')})