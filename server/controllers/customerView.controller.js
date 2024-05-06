import dbpool from '../db/connectAWSdb.js';
import jwt from "jsonwebtoken";

// stockView controller
export const stockView = (req, res) => {
    const { StockSymbol, cookies } = req.body;
    // console.log("This is cookie" + req.cookies);
    // console.log("This is fake cookie" + cookies);
    const payload = jwt.verify(cookies, 'Bhun-er')
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
                    const query = `SELECT SUM(Volume), OrderType FROM Orders WHERE UserID = ? AND StockID = ? AND OrderStatus = "Success" GROUP BY OrderType`
                    connection.query(query, [userID, stock['StockID']], (err, rows) => {
                        if (err) {
                            connection.release();
                            throw err;
                        }

                        if (!rows) {
                            connection.release();
                            return res.status(400).json({ error: "Cannot get data" });
                        }
                        console.log(rows);
                        let netVol = rows[0]['SUM(Volume)']
                        if (rows.length==2) {
                           netVol -= rows[1]['SUM(Volume)']
                        }
                        
                        const query = `SELECT AccountBalance FROM Users WHERE UserID = ?`
                        connection.query(query, [userID], (err, rows) => {
                        if (err) {
                            connection.release();
                            throw err;
                        }

                        if (!rows) {
                            connection.release();
                            return res.status(400).json({ error: "Cannot get data" });
                        }
                        console.log(userID);
                        const userBalance = rows[0]
                        const stockViewData = Object.assign(stock, {stock_hist}, {netVol}, userBalance)
                        //console.log(stockViewData)
                
                        connection.release();
                        res.status(200).send(stockViewData);
                        })

                    })     
                });
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    });
};

export const profile = (req, res) => {
    const {cookies} = req.body
    const payload = jwt.verify(cookies, 'Bhun-er')
    const  userID = payload['userID']
    dbpool.getConnection(async(err, connection) => {
        if (err) throw err
        try {
            const query = `SELECT * FROM Users WHERE UserID = ?`
            connection.query(query, [userID], (err, rows) => {
                const userData =  rows[0]
                connection.release()
                res.status(200).send(stockViewData);
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    })
}

export const portfolio = (req, res) => {
    // const {cookies} = req.body
    // const payload = jwt.verify(cookies, 'Bhun-er')
    // const  userID = payload['userID']
    dbpool.getConnection((err, connection) => {
        if (err) throw err
        try{
            const getBuyVolQuery = `SELECT StockSymbol, Vol, CurrentPrice, OrderType FROM (SELECT SUM(Volume) AS Vol, StockID, OrderType FROM Orders WHERE UserID = ?  AND OrderStatus = "Pending" GROUP BY StockID, OrderType) AS NetVol LEFT JOIN Stocks ON NetVol.StockID = Stocks.StockID`
            connection.query(getBuyVolQuery, [1], (err, rows) => {
                console.log(rows)
            })


        } catch (error) {
            console.log(error)
            res.status(500).json({ error: "Internal Server Error" });
        }
    })
}