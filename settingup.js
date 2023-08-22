const express= require (`express`)
const app = express()
app.get(`/backend`, async(req,res)=>{
    try{
        return res.send("hello world!")
    }
    catch(err){
        return res.status(500).send("syntax error")
    }
})
app.listen(5000)
