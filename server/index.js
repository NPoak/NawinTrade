import express from "express";
import axios from 'axios';
import cors from "cors";
import financialModelingPrep from 'financialmodelingprep';


const app = express();
const port = process.env.PORT || 5000;

const apiKey = "gQERlMvVTI5GZJtzaVkQgSLTBpXiuxW7";

const fmp = financialModelingPrep(apiKey);

app.use(cors());


app.get('/', (req, res) => {
    console.log(req);
    return response.status(234).send("Hello Nawin");
});

app.get('/getstockdata', async (req, res) => {
  try {
  const response = await fmp.stock('aapl').history();
  res.json(response); 
  } catch(error) {
    console.error('Error fetching stock quote:', error);
  }
} );


app.listen(port ,() => console.log(`App is listening to port: ${port}`));