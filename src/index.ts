import express, {Express,Request,Response} from 'express';
import {debuglog} from "node:util";

//1.Initializing express app
const app : Express = express();

//2.Define the application port
const port = 3000;

//3.Define a simple HTTP Get Request
// As the first parameter we have to give the url path
app.get('/',(req : Request,res : Response) =>  {
    res.send("HELLO WORLD!!!")
});

//4.Instruct the express app to listen on port 3000
app.listen(port,()=>{
    console.log(`Server is running at HTTP://localhost:${port}`)
})