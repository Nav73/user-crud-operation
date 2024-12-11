import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';


const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
const PORT = 8000;

app.get("/", (req, res)=>{
res.sendFile(path.join(__dirname, "/views/hello.html"));
})

app.listen(PORT, ()=>{
    console.log("server running http://localhost:8000")
})