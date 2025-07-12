import express, {Express} from "express";
import productRouter from "./routes/product.route";
import contactRouter from "./routes/contact.route";

import cors from 'cors';


const app : Express = express();

app.use(express.json())
const allowedOrigins = [
    "http://localhost:5173"//origin we need to give the access
    // , other origins
]

//This allows/enable CORS in the project
// app.use(cors());

//Blacklisting means

//This is called whitelisting a URL (Allowing some URLs to access the API)
const corsOptions = {
    origin : (origin:string|undefined , callback: (err:Error | null , allow?:boolean) => void) => {
        if (!origin || allowedOrigins.includes(origin)){
            callback(null,true)
        }else{
            callback(new Error("Not allowed by CORS"));
        }
    }
}

app.use(cors(corsOptions));

app.use("/api/products", productRouter);
app.use("/api/contact",contactRouter)


/*app.get('/',(req : Request,res : Response) =>  {
    console.log(req.body);
    res.send("HELLO WORLD!!!")
});
*/

export default app;