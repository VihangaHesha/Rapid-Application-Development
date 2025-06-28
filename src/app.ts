import express, {Express, Request, Response} from "express";

const app : Express = express();

//2.1 Define Middlewares
//Instruct to parse the request payload data to be converted to JSON format
app.use(express.json())

app.get('/',(req : Request,res : Response) =>  {
    res.send("HELLO WORLD!!!")
});

export default app;