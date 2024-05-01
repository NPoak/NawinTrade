import financialModelingPrep from 'financialmodelingprep';
import dbpool from '../db/connectAWSdb.js';

export const insertStock =  async (req, res) => {
    const symbol = 'AAPL';
    const apiKey = "gQERlMvVTI5GZJtzaVkQgSLTBpXiuxW7";
    const fmp = financialModelingPrep(apiKey);
    const stockjson = await fmp.stock('aapl').profile();
    const pool = dbpool;
    // res.json(res);
    pool.getConnection((err, connection) => {
        if (err) throw err
        console.log('connected as id ' + connection.threadId)
        //console.log(stockjson['profile']['companyName']);
        const query = `INSERT INTO Stocks (StockID, StockSymbol, CompanyName, Exchange, CurrentPrice, MarketCap, LastestDividend, Sector, Industry, Description, Website, ImageURL)
            VALUES (1, ?, ?, ?, 0, ?, 0, ?, ?, ?,  ?)`
            connection.query(query, [stockjson['symbol'], stockjson['profile']['companyName'], stockjson['profile']['exchange'], stockjson['profile']['mktCap'], stockjson['profile']['sector'], stockjson['profile']['industry'], stockjson['profile']['website'], stockjson['profile']['image']], (err, results, fields) => {
                if (err) throw err
                console.log('Stock insert successfully: ', results);
            })



        // stockjson.forEach((data) => {
        //     const {symbol, companyName, exchange, mktCap, sector, industry, description, website, image} = data;
        //     const query = `INSERT INTO Stocks (StockID, StockSymbol, CompanyName, Exchange, CurrentPrice, MarketCap, LastestDividend, Sector, Industry, Description, Website, ImageURL)
        //     VALUES (1, ?, ?, ?, 0, ?, 0, ?, ?, ?, ?, ?)`
        //     connection.query(query, [symbol, companyName, exchange, mktCap, sector, industry, description, website, image], (err, results, fields) => {
        //         if (err) throw err
        //         console.log('Stock insert successfully: ', results);
        //     })
        // })
        
    })

}
