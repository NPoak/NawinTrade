import express, { request, response } from "express";
import axios from 'axios';
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());


app.get('/', (req, res)=>{
    console.log(req);
    return response.status(234).send("Hello Nawin");
});

app.get('/stockdata', async (req, res) => {
    const url = 'https://www.alphavantage.co/query';
    const apiKey = 'G6XBC8ZC4PF0Z7O9';
    const symbol = 'IBM';
    const interval = '5min';
  
    try {
      const response = await axios.get(url, {
        params: {
          function: 'TIME_SERIES_INTRADAY',
          symbol: symbol,
          interval: interval,
          apikey: apiKey
        }
      });
  
      // Extract the data from the response
      const responseData = response.data;
  
      // Send the data back to the client
      res.json(responseData);
    } catch (error) {
      console.error('Error fetching stock data:', error.message);
      res.status(500).send('Internal Server Error');
    }
  });

app.listen(port ,() => console.log(`App is listening to port: ${port}`));