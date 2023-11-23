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

const app=express()
const port=3000

app.get('/',(req,res)=>{
   res.send("ok connected")
})
app.listen(port ,()=>console.log("server is running on ",port))