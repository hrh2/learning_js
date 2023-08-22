const mongoose=require('mongoose');
mongoose.connect(`mongodb://127.0.0.1:27017/learning`,{useNewUrlParser:true,useUnifiedTopology:true});

const userSchemer=new mongoose.Schema({
    name:String,
    contactNumber:{type:Number,required:true,unique:true},
    date:Date,
})

const User=mongoose.model('User',userSchemer)

const  user= new User({name:"Jerry",contactNumber:"455354", date:Date.now()})

user.save()

const fetchData= User.find()

console.log(fetchData)