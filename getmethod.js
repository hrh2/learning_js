const express = require('express');


const { dog1 }=require('../../../../run/media/hirwa/USB DRIVE/backend_express/oop/index');
const server=express();
const PORT=2500

server.get('/',async function(req,res){
     try{
        res.status(200).json({
            msg:"this the home page ",
            data:{
                product:['Biscuits','Oil'],
                contacts:{
                    phone:"723798839",
                    email:"ltg@gmail.com"
                }
            }
        });
     }catch(error){
        res.status(500).json({msg:"internal error :"+error.message});
     }
})

server.get('/products', async (req,res)=>{
    try{
        res.status(200).json({
            msg:"Endpoint for Products",
            biscuit:23,
            oil:45
        });
    }catch(e){
        res.status(500).json({
            msg:"Internal Server Error" + e.message,
        })
    }
})

server.get('/contacts', async (req,res)=>{
    // try{
        res.status(200).json({msg:"Our contacts successfully returned",})

    // }
    // catch(error){
    //    res.status(500).json({msg:"system error",})
    // }
})

server.get(`/users` , async (req, res) => {
  try{ 
    res.status(200).json({msg:"User successfully returned",
    user:[
        {name:"John",id:1},
        {name:"Arsen",id:2},
        {name:"hope",id:3},
        {name:"Prince",id:4},
        {name:"Manzi",id:5},
        {name:"Chriss",id:6},
    ]
     ,})
  }
  catch(err){
    res.status(500).json({message:err.message})
  }
})

server.get(`/dog`, async(req, res) => {
    try{
        res.status(200).json(dog1)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
})


server.get(`/dog/name`, async(req,res) =>{
    try{
        res.status(200).json(dog1.name)
    }
    catch(err){
        res.status(500).json(err.message)
    }
})


// using return type of a function  while reducing conflicts between header

server.get('/dog/:index',(req,res)=>{
    try{
        //getting the parameter in the request
        const dog_index=req.params.index
        // my responce with the sent argument

       return res.status(200).json({parameter:req.params.index}) 

       }catch(e){

       return  res.status(500).json(e.message)
       }
})

server.get(`/puppy/:index`,async (req, res) =>{
    try{
        const puppy_id=req.params.index
        if(puppy_id==0 || puppy_id==1 || puppy_id==2){

        return res.status(200).json(dog1.children[puppy_id])
        }else{
           return res.status(404).json(`The dog ${dog1.name} hasn't a puppy with that id ${puppy_id}`)
        }
    }
    catch(err){
      return  res.status(500).json(err.message)
    }
})


server.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}  link: http://localhost:${PORT} `)
})