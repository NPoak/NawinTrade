import financialModelingPrep from 'financialmodelingprep';
import dbpool from '../db/connectAWSdb.js';

export const insertStock =  async (req, res) => {
    const apiKey = "gQERlMvVTI5GZJtzaVkQgSLTBpXiuxW7";
    const fmp = financialModelingPrep(apiKey);
    const stockjson = await fmp.stock('nke').profile();
    const pool = dbpool;
    // res.json(res);
    pool.getConnection((err, connection) => {
        if (err) throw err
        console.log('connected as id ' + connection.threadId)
        //console.log(stockjson['profile']['companyName']);
        const query = `INSERT INTO Stocks (StockID, StockSymbol, CompanyName, Exchange, CurrentPrice, MarketCap, LastestDividend, Sector, Industry, Website, ImageURL)
            VALUES (5, ?, ?, ?, 0, ?, 0, ?, ?, ?,  ?)`
        connection.query(query, [stockjson['symbol'], stockjson['profile']['companyName'], stockjson['profile']['exchange'], stockjson['profile']['mktCap'], stockjson['profile']['sector'], stockjson['profile']['industry'], stockjson['profile']['website'], stockjson['profile']['image']], (err, results, fields) => {
            if (err) throw err
            console.log('Stock insert successfully: ', results);
         })

    })
}


export const insertHistory = async (req, res) => {
    const apiKey = "gQERlMvVTI5GZJtzaVkQgSLTBpXiuxW7";
    const fmp = financialModelingPrep(apiKey);
    const stockjson = await fmp.stock('amd').history();
    const pool = dbpool;
    // res.json(res);
    pool.getConnection((err, connection) => {
        if (err) throw err
        console.log('connected as id ' + connection.threadId)
        //console.log(stockjson[0]);
        const query = `INSERT INTO Stock_Prices_History (StockID, Date, Open_Price, EOD_Price, Hi_Price, Lo_Price)
        VALUES (3, ?, ?, ?, ?, ?)`
        for (let i=0; i < 180; i++) {
            connection.query(query, [ stockjson['historical'][i]['date'], stockjson['historical'][i]['open'], stockjson['historical'][i]['adjClose'], stockjson['historical'][i]['high'], stockjson['historical'][i]['low']], (err, results) => {
                if (err) throw err
            })
        }
        console.log('History inserted!')
        connection.release()
    })
}
