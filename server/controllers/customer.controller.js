import dbpool from '../db/connectAWSdb.js';
import jwt from "jsonwebtoken";
// stockView controller
export const stockView = (req, res) => {
    const { StockSymbol, cookies } = req.body;
    // console.log("This is cookie" + req.cookies);
    // console.log("This is fake cookie" + cookies);
    const payload = jwt.verify(cookies, 'Bhun-er')
    // let userID
    // jwt.verify(cookies, "Bhun-er", (err, decoded) => {
    //     if(err) {
    //         console.log(err)
    //     } else {
    //          userID = decoded['UserID']
    //     }
    //    })
    const  userID = payload['userID']
    console.log(cookies)
    console.log(payload['userID'])
    dbpool.getConnection(async (err, connection) => {
        if (err) throw err;
        try {
            let stock;
            const query = `SELECT * FROM Stocks WHERE StockSymbol = ?`;
            connection.query(query, [StockSymbol], async(err, rows) => {
                if (err) throw err;
                
                stock = rows[0];
                console.log(stock);
                
                if (!stock) {
                    connection.release();
                    return res.status(400).json({ error: "Cannot get data" });
                }
                
                connection.query(`SELECT * FROM Stock_Prices_History WHERE StockID = ?`, [stock['StockID']], (err, rows) => {
                    if (err) {
                        connection.release();
                        throw err;
                    }
                    
                    const stock_hist = rows;
                    if (!stock_hist) {
                        connection.release();
                        return res.status(400).json({ error: "Cannot get data" });
                    }
                    const query = `SELECT SUM(Volume), TransactionType FROM Transaction WHERE UserID = ? AND StockID = ? GROUP BY TransactionType`
                    connection.query(query, [userID, stock['StockID']], (err, rows) => {
                        if (err) {
                            connection.release();
                            throw err;
                        }

                        if (!rows) {
                            connection.release();
                            return res.status(400).json({ error: "Cannot get data" });
                        }
                        console.log(userID);
                        const netVol = rows[0]['SUM(Volume)'] - rows[1]['SUM(Volume)']
      
                        const stockViewData = Object.assign(stock, {stock_hist}, {netVol})
                        //console.log(stockViewData)
                        res.status(200).send(stockViewData);
                    })
                    
                });
            });
            //connection.release();
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    });
};

