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
                    const query = `SELECT SUM(Volume), OrderType FROM Orders WHERE UserID = ? AND StockID = ? AND (OrderStatus = "Success" OR OrderType = "Sell") GROUP BY OrderType`
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
                        
                        const query = `SELECT Users.AccountBalance, Brokers.TradingComFee
                                        FROM Users
                                        LEFT JOIN Brokers ON Users.BrokerID = Brokers.BrokerID
                                        WHERE Users.UserID = ?`
                        connection.query(query, [userID], (err, rows) => {
                        if (err) {
                            connection.release();
                            throw err;
                        }

                        if (!rows) {
                            connection.release();
                            return res.status(400).json({ error: "Cannot get data" });
                        }
                        //console.log(userID);
                        const userData= rows[0]
                        // console.log(userData)
                        const stockViewData = Object.assign(stock, {stock_hist}, {netVol}, {'AccountBalance': userData['AccountBalance'], 'ComFee': userData['TradingComFee']})
                    
                        console.log(stockViewData)
                
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
                if (err) throw err
                const userData =  rows[0]
                connection.release()
                res.status(200).send(userData);
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    })
}

export const portfolio = (req, res) => {
    const {cookies} = req.body
    const payload = jwt.verify(cookies, 'Bhun-er')
    const  userID = payload['userID']
    dbpool.getConnection((err, connection) => {
        if (err) throw err
        try{
            const getBuyVolQuery = `
                    SELECT 
                    NetVol.StockID,
                    Stocks.StockSymbol,
                    NetVol.Vol,
                    Stocks.CurrentPrice,
                    NetVol.OrderType,
                    LatestPrice.EOD_Price AS SecondLatestEOD_Price
                FROM 
                    (
                        SELECT 
                            SUM(Volume) AS Vol,
                            StockID,
                            OrderType 
                        FROM 
                            Orders 
                        WHERE 
                            UserID = ?
                            AND (OrderStatus = 'Success' OR OrderType = 'Sell') 
                        GROUP BY 
                            StockID,
                            OrderType
                    ) AS NetVol
                LEFT JOIN 
                    Stocks ON NetVol.StockID = Stocks.StockID
                LEFT JOIN 
                    (
                        SELECT 
                            StockID,
                            MAX(Date) AS LatestDate,
                            MAX(CASE WHEN Date < (SELECT MAX(Date) FROM Stock_Prices_History WHERE StockID = SPH.StockID) THEN Date END) AS SecondLatestDate
                        FROM 
                            Stock_Prices_History SPH
                        GROUP BY 
                            StockID
                    ) AS LatestDates ON NetVol.StockID = LatestDates.StockID
                LEFT JOIN 
                    Stock_Prices_History AS LatestPrice ON LatestDates.StockID = LatestPrice.StockID
                    AND LatestDates.SecondLatestDate = LatestPrice.Date`

            connection.query(getBuyVolQuery, [userID], (err, rows) => {
                if (err) throw err
                const Vol = rows
                //console.log(Vol)
     
                const result = [];

                Vol.forEach(item => {
                const existingItem = result.find(i => i.StockSymbol === item.StockSymbol);
                if (existingItem) {
                    if (item.OrderType === 'Buy') {
                    existingItem.netVol += item.Vol;
                    } else if (item.OrderType === 'Sell') {
                    existingItem.netVol -= item.Vol;
                    }
                } else {
                    const newItem = {
                    StockSymbol: item.StockSymbol,
                    netVol: item.OrderType === 'Buy' ? item.Vol : -item.Vol,
                    currentPrice: item.CurrentPrice,
                    SecondLatestEOD_Price: item.SecondLatestEOD_Price
                    };
                    result.push(newItem);
                }
                });
                //console.log(Vol)
                connection.release()
                console.log(result)
                res.status(200).send(result)
            })

        } catch (error) {
            console.log(error)
            res.status(500).json({ error: "Internal Server Error" });
        }
    })
}

export const tradinghistory = (req, res) => {
    const {cookies} = req.body
    const payload = jwt.verify(cookies, 'Bhun-er')
    const  userID = payload['userID']
    dbpool.getConnection((err, connection) => {
        if (err) throw err
        try{
            const gethistory = `SELECT o.OrderType, s.StockSymbol, o.Volume, o.Price, o.OrderDateTime,
            CASE 
                    WHEN o.OrderType = 'BUY' THEN o.Price * o.Volume / (1 - ((SELECT TradingComFee FROM Brokers WHERE BrokerID =
                    (SELECT BrokerID FROM Stock_Available WHERE StockID = o.StockID))) / 100)
                    WHEN o.OrderType = 'SELL' THEN o.Price * o.Volume * (1 - ((SELECT TradingComFee FROM Brokers WHERE BrokerID =
                    (SELECT BrokerID FROM Stock_Available WHERE StockID = o.StockID))) / 100)
            END AS amount_money
            FROM Orders o RIGHT JOIN Stocks s ON o.StockID = s.StockID
            WHERE o.UserID = ? and o.OrderStatus = "Success";`

            const getCount = `SELECT count(*) AS count
            FROM Orders 
            WHERE UserID = ? and OrderStatus = "Success";`

            const getNet7day = `SELECT SUM(amount_money) AS net
            FROM (SELECT 
                    CASE 
                        WHEN o.OrderType = 'BUY' THEN -o.Price * o.Volume / (1 - ((SELECT TradingComFee FROM Brokers WHERE BrokerID = 
                        (SELECT BrokerID FROM Stock_Available WHERE StockID = o.StockID)) / 100))
                        WHEN o.OrderType = 'SELL' THEN o.Price * o.Volume * (1 - ((SELECT TradingComFee FROM Brokers WHERE BrokerID = 
                        (SELECT BrokerID FROM Stock_Available WHERE StockID = o.StockID)) / 100))
                    END AS amount_money
                FROM Orders o RIGHT JOIN Stocks s ON o.StockID = s.StockID
                WHERE o.UserID = ? AND o.OrderStatus = 'Success' AND o.OrderDateTime >= DATE_SUB(NOW(), INTERVAL 7 DAY)
            ) AS subquery;`

            connection.query(gethistory, [userID], (err, rows1) => {
                if (err) throw err;
                connection.query(getCount, [userID], (err, rows2) => {
                    if (err) throw err;
                    connection.query(getNet7day, [userID], (err, rows3) => {
                        if (err) throw err;
                        const result = {
                        tradingHistory: rows1,
                        Count: rows2,
                        Net7day: rows3
                    };
                    connection.release();
                    console.log(result);
                    res.status(200).send(result);
                    });
                });
            });

        } catch (error) {
            console.log(error)
            res.status(500).json({ error: "Internal Server Error" });
        }
    })
}

export const paymenthistory = (req, res) => {
    const {cookies} = req.body
    const payload = jwt.verify(cookies, 'Bhun-er')
    const  userID = payload['userID']
    dbpool.getConnection((err, connection) => {
        if (err) throw err
        try{
            const gethistory = `SELECT *
            FROM Payments
            WHERE UserID = ?;`

            connection.query(gethistory, [userID], (err, rows) => {
                if (err) throw err
                const result = rows
                connection.release()
                console.log(result)
                res.status(200).send(result)
     
                
            })

        } catch (error) {
            console.log(error)
            res.status(500).json({ error: "Internal Server Error" });
        }
    })
}