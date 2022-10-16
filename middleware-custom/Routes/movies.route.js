
const express =require("express")

const moviesRouter=express.Router()

moviesRouter.post("/post",(req,res)=>{
    res.send("post successfully")
})

moviesRouter.get("/get",(req,res)=>{
    res.send("get successfullyy")
})

module.exports={moviesRouter}