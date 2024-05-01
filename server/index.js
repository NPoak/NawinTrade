import express from "express";
import axios from 'axios';
import cors from "cors";
import financialModelingPrep from 'financialmodelingprep';
import mysql from "mysql";
import dbRoutes from './routes/createDB.route.js'; 


const app = express();
const port = process.env.PORT || 5000;

const apiKey = "gQERlMvVTI5GZJtzaVkQgSLTBpXiuxW7";

const fmp = financialModelingPrep(apiKey);
app.use(express.json());



app.use(cors());


// app.get('/', (req, res) => {
//     console.log(req);
//     return res.status(234).send("Hello Nawin");
// });

app.use('/api/eDB', dbRoutes);

const pool  = mysql.createPool({
  host: 'nawintrade-db.cta0k8w6kiam.ap-southeast-2.rds.amazonaws.com',
  port: '3306',
  user: 'admin',
  password: 'Bhun123456',
  database: 'nawintradeDB'
});





app.get('/getstockdata', async (req, res) => {
  try {
  const response = await fmp.stock('aapl').profile();
  res.json(response);
   
  } catch(error) {
    console.error('Error fetching stock quote:', error);
  }
} );







// app.get('/createBrokerTable',  (req, res) => {
//   pool.getConnection((err, connection) => {
//     if(err) throw err
//     console.log('connected as id ' + connection.threadId)
//     connection.query('SHOW TABLES', (err, rows) => {
//         connection.release() // return the connection to pool

//         if (!err) {
//           //console.log("table created")
//             //res.send(rows)
//         } else {
//             console.log(err)
//         }
//         //console.log("Table created!")
//         // if(err) throw err
//         console.log('The data from staff table are: \n', rows)
//     })
// })
// })




app.listen(port ,() => console.log(`App is listening to port: ${port}`));