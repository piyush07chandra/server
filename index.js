// import mongoose from 'mongoose'
// import express from 'express'


const express=require("express")
const mongoose=require('mongoose')


const main =async()=>{
    try {
        await mongoose.connect(`mongodb://127.0.0.1:27017/heliverse`)
        console.log("database connected")
     }
     catch (error){
        console.log("error while connecting with the database",error.message);
     }
}
main()




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
const app=express()

app.get('/',async(req,res)=>{
   
   try {
      const users = await User.find();
      res.json(users);
      res.send("ok connected")
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } 
})
const port=9000
app.listen(port ,()=>console.log("server is running on ",port))
