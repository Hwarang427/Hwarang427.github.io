//Creates back end Server, left in as the only 'functional' node.js code
const express= require('express')
const app=express()

app.get("/",(req,res)=>{
    console.log("Responding to Root Route")
    res.send("Here is your express Backend")
})
//http://localhost:3000/
app.listen(3000, ()=>{
    console.log('Server is up and listening on port 3000')
})