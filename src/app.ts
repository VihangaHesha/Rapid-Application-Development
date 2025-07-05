import express, {Express} from "express";
import productRouter from "./routes/product.routes"

const app : Express = express();

//2.1 Define Middlewares
//Instruct to parse the request payload data to be converted to JSON format
app.use(express.json())

app.use("/api/products", productRouter);


/*app.get('/',(req : Request,res : Response) =>  {
    console.log(req.body);
    res.send("HELLO WORLD!!!")
});
*/

export default app;