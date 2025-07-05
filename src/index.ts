import app from "./app";
import dotenv from "dotenv"

dotenv.config();//This load all the environment variables to this variable from the ".env" file

// With "process.env.PORT" we can access the port that we defined in the .env
//and if there is no .env file or it is undefined we can give it like bellow to take a default value
const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server is running at HTTP://localhost:${port}`)
})