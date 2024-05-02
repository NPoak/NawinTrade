import bcrypt from 'bcrypt';
import dbpool from '../db/connectAWSdb.js'; 
import generateTokenAndSetCookie from '../utils/generateToken.js';

// Login controller
export const signin = async (req, res) => {
  try {
    const { username, password, brokerID } = req.body;
    dbpool.getConnection(async(err,connection)=>{
      if (err) throw err
      connection.query('SELECT * FROM Users WHERE Username = ? AND BrokerID = ?',[username,brokerID],async(err,rows)=>{
        if (err) throw err
        const user = rows[0]

        //console.log(rows)
        //connection.release()
        if (!user) {
        return res.status(400).json({ error: "Invalid username or password or brokerID" });
      }
  
      // Compare passwords
      const isPasswordCorrect = await bcrypt.compare(password, user['Password']);
      
      if (!isPasswordCorrect) {
        return res.status(400).json({ error: "Invalid username or password or brokerID" });
      }
  
      // Login successful, generate token and set cookie
      generateTokenAndSetCookie(user['UserID'], res); // Call the function with userId
  
      // Respond with user information
      res.status(200).send("login success");
      }
    );
    });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};



