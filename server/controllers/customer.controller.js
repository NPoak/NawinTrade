import dbpool from '../db/connectAWSdb.js';

// stockView controller
export const stockView = (req, res) => {
    const { StockSymbol } = req.body;
    const cookies = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIwMDAwMDAwMDAxIiwiaWF0IjoxNzE0NjYyNDUyLCJleHAiOjE3MTU5NTg0NTJ9.fc88Q9mFGqjfvP1Buz-q6cPbC4VANp9tnFISNOwqS1w'
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
                
                connection.query(`SELECT * FROM Stock_Prices_History WHERE StockID = ?`, [stock['StockID']], async(err, rows) => {
                    if (err) {
                        connection.release();
                        throw err;
                    }
                    
                    const stock_hist = rows[0];
                    console.log(stock_hist);
                    
                    if (!stock_hist) {
                        connection.release();
                        return res.status(400).json({ error: "Cannot get data" });
                    }
                    
                    // Any further processing that depends on stock_hist can be done here

                    res.status(200).send("Data is now showing");
                    connection.release();
                });
            });
            console.log("outside " + stock); // This will log before the asynchronous operations complete
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    });
};


