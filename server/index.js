import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
// const PORT = 8000;
const PORT = process.env.PORT;


app.get("/", (req, res)=>{
res.sendFile(path.join(__dirname, "/views/hello.html"));
})

app.listen(PORT, ()=>{
    console.log(`server running http://localhost:${PORT}`)
})