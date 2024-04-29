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


const pool  = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: null,
  database: 'dreamhome'
});



app.get('/dreamhomestaff',  (req, res) => {
  pool.getConnection((err, connection) => {
    if(err) throw err
    console.log('connected as id ' + connection.threadId)
    connection.query('SELECT * from staff', (err, rows) => {
        connection.release() // return the connection to pool

        if (!err) {
            res.send(rows)
        } else {
            console.log(err)
        }

        // if(err) throw err
        console.log('The data from staff table are: \n', rows)
    })
})
})




app.listen(port ,() => console.log(`App is listening to port: ${port}`));