import express, { request, response } from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());


app.get('/', (request, response)=>{
    console.log(request);
    return response.status(234).send("Hello Nawin");
})

app.listen(port ,() => console.log(`App is listening to port: ${port}`));