
import express from 'express';


const app = express();

const PORT = 8000;

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "hello.html");
})

app.listen(PORT, ()=>{
    console.log("server running http://localhost:8000")
})