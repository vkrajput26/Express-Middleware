

const express= require("express")
const app =express()
const {moviesRouter} =require("./Routes/movies.route")

app.use(express.json())

const validator=(req,res,next)=>{
    let {id,name,rating,discription,genre,cast}=req.body;
    if(typeof(id)=="number" && typeof(name)=="string" && typeof(rating)=="number" &&  typeof(discription)=="string" && typeof(genre)=="string" && typeof(cast)=="string" ){
        next()
    }
    else{
        res.send(" bad request  400")
    }
}

app.use(validator)
app.use("/movies",moviesRouter)

app.listen(8050,()=>{
    console.log("server 8050")
})