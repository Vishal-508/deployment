const express =require("express")
const app =express();
require("dotenv").config();

const PORT=process.env.PORT || 8080;

app.get("./", (req,res)=>{
    res.send("hello from the backend API")
})

app.listen(PORT,()=>{
    console.log("listen on port 4000")
})