import './index.css';
import ReactDOM from 'react-dom/client'
import 'sweetalert2/src/sweetalert2.scss'
import { Navigate, Routes, Route, BrowserRouter } from "react-router-dom";

import Deposit_p from './pages/depositpage/Depositpage.jsx';
import Withdraw_p from './pages/withdrawpage/Withdrawpage.jsx';
import Useracc_p from './pages/useraccpage/Useraccpage.jsx';

import Loginpage from './pages/loginpage/Loginpage.jsx';
import Stockview from './pages/Stockview/Stockview.jsx';
import BuyStock from './pages/Buy_Stock/BuyStock.jsx';
import SellStock from './pages/Sell_Stock/SellStock.jsx';
import Userportfolio from './pages/User_portfolio/Userportfolio.jsx';
import Payment_history from './pages/payment_history/Payment_history.jsx';
import Consultaccount from './pages/Consult_account/Consultaccount.jsx';
import Consultportfolio from './pages/Consult_customer_portfolio/Consultportfolio.jsx';
import Staffaccount from './pages/Staff_account/Staffaccount.jsx';
import Dca from './pages/dca/dca.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace={true} />}/>
      <Route path='/login' element={<Loginpage   />}/> 
      <Route path='/deposit' element={<Deposit_p   />}/> 
      <Route path='/withdraw' element={<Withdraw_p   />}/> 
      <Route path='/account' element={<Useracc_p   />}/> 
      <Route path='/stockview/:symbol' element={<Stockview   />}/> 
      <Route path='/buystock' element={<BuyStock />} />
      <Route path='/sellstock' element={<SellStock />} />
      <Route path='/portfolio' element={<Userportfolio />} />
      <Route path='/dca' element={<Dca />} />
      <Route path='/paymenthistory' element={<Payment_history />} />
      <Route path='/consultaccount' element={<Consultaccount />}/>
      <Route path='/consultportfolio' element={<Consultportfolio />}/>
      <Route path='/staffaccount' element={<Staffaccount />}/>
      <Route path='*' element={<Navigate to="/Stockview/AAPL" replace={true} />}/>
    </Routes>
  </BrowserRouter>,
)
