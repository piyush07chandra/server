const express=require("express")
const mongoose=require('mongoose')
const app=express()

const main =async()=>{
    try {
        await mongoose.connect(`mongodb+srv://piyush:LzXIr0Z8D3Vje19c@web-ecomerce.3wphvcu.mongodb.net/?retryWrites=true&w=majority`, { 
         serverSelectionTimeoutMS: 5000 
     })
        console.log("database connected")
     }
     catch (error){
        console.log("error while connecting with the database",error.message);
     }
}
main()


const PORT=process.env.PORT || 3000


let userSchema=new mongoose.Schema({
   id:mongoose.Schema.Types.ObjectId,
   first_name:'string',
   last_name:"String",
   email:"String",
   gender:"String",
   avatar:"String",
   domain:"String",
   available:"String"
})
const User = mongoose.model('workors',userSchema);

app.get('/',async(req,res)=>{
   
   try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } 
})
app.listen(PORT ,()=>console.log(`server is running on ${PORT}`))
