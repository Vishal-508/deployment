const express =require("express")
require("dotenv").config();
const app =express();

const PORT=process.env.PORT || 8080;

app.get("./", (req,res)=>{
    res.send("hello from the backend API")
})

app.listen(PORT,()=>{
    console.log("listen on port 4000")
})