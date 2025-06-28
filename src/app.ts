import express, {Express, Request, Response} from "express";

//1.Initializing express app
const app : Express = express();

//3.Define a simple HTTP Get Request
// As the first parameter we have to give the url path
app.get('/',(req : Request,res : Response) =>  {
    res.send("HELLO WORLD!!!")
});

export default app;