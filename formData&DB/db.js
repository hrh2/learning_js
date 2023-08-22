const mongoose = require(`mongoose`)

const connect=async ()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/formData",{useUnifiedTopology:true,useNewUrlParser:true})
        console.log("db connect")
    }
    catch(er){
      console.log("error in db connection: " +er.message)
    }   
}

const userSchema= new mongoose.Schema({
    name:{type:String,required:true},
    username:{type:String,required:true},
    phonenumber:{type:Number,required:true},
    dob:{type:Date,required:true},
    signupdate:{type:Date,required:false,default: Date.now()},
    password:{type:String,required:true},
})


const User=mongoose.model(`User`, userSchema)

module.exports={connect,User}