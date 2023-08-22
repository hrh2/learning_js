const {family}= require(`./object`)
// gpere and gmere
// children  names  of gpere and gmere
// post req for  family  father mother  child

const express   = require(`express`)
const app = express()
const port = 4000;
const cors = require('cors'); // Import the cors package
// Use the cors middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.listen(port, function(){
    console.log (`listening on ${port}`)
})




app.get('/root', async (req, res)=>{
    try{

      return  res.status(200).json({ data:"data sent"});
    }
    catch(err){
      return  res.status(500).send("error")
        
    }
})


app.post(`/`, async (req,res)=>{
    try{
        let data=req.body
        return res.status(200).json({msg:"success",data})
    }
    catch(err){
        return res.status(500).json({msg:`${err.message}`})
    }
})

app.get(`/children`, async (req,res)=>{
    try{
        return res.status(200).send(`${family.children[0].name}<i>and</i>${family.children[1].name}`)
    }
    catch(er){
        return res.status(500).send(`syntax error`)
    }
}

)