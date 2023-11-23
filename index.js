// import mongoose from 'mongoose'
// import express from 'express'


const express=require("express")
const mongoose=require('mongoose')


const main =async()=>{
    try {
        await mongoose.connect(`mongodb+srv://piyush:LzXIr0Z8D3Vje19c@web-ecomerce.3wphvcu.mongodb.net/?retryWrites=true&w=majority`)
        console.log("database connected")
     }
     catch (error){
        console.log("error while connecting with the database",error.message);
     }
}
main()

const app=express()
const port=3000

app.get('/',(req,res)=>{
   res.send("ok connected")
})
app.listen(port ,()=>console.log("server is running on ",port))