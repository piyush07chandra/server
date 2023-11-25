// import mongoose from 'mongoose'
// import express from 'express'


const express=require("express")
const mongoose=require('mongoose')
const app=express()




const main =async()=>{
   // const URL=`mongodb+srv://piyush:LzXIr0Z8D3Vje19c@web-ecomerce.3wphvcu.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(`mongodb://127.0.0.1:27017/heliverse`, { 
         serverSelectionTimeoutMS: 5000 // Set to a higher value if needed
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
const User = mongoose.model('User', userSchema);

app.get('/',async(req,res)=>{
   
   try {
        // Fetch users
        const users = await User.find();

        // Log execution statistics
        const explainResult = await User.find({}).explain('executionStats');
        console.log('Execution Stats:', explainResult.executionStats);

        // Send users as JSON response
        res.json(users);
      res.send("ok connected")
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } 
})
app.listen(PORT ,()=>console.log(`server is running on ${PORT}`))
