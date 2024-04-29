import express from "express";
import axios from 'axios';
import cors from "cors";
import financialModelingPrep from 'financialmodelingprep';
import mysql from "mysql";


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


const connection  = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: null,
  database: 'dreamhome'
});



app.get('/dreamhomestaff',  (req, res) => {
   connection.connect((err) => {
    if (err) {
      console.log(err.code);
    }
   })

   connection.query("SELECT * FROM branch", (err, rows, fields) => {
    if (err) {
      console.log("ERROR!");
      return;
    }
    console.log("Query successfully executed", rows);
   })
})




app.listen(port ,() => console.log(`App is listening to port: ${port}`));