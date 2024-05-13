import './index.css';
import ReactDOM from 'react-dom/client'
import 'sweetalert2/src/sweetalert2.scss'
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Deposit_p from './pages/depositpage/Depositpage.jsx';
import Withdraw_p from './pages/withdrawpage/Withdrawpage.jsx';
import Useracc_p from './pages/useraccpage/Useraccpage.jsx';

import Loginpage from './pages/loginpage/Loginpage.jsx';
import Stockview from './pages/Stockview/Stockview.jsx';
import BuyStock from './pages/Buy_Stock/BuyStock.jsx';
import SellStock from './pages/Sell_Stock/SellStock.jsx';
import Userportfolio from './pages/User_portfolio/Userportfolio.jsx';
import Payment_history from './pages/payment_history/Payment_history.jsx';
import Dca from './pages/dca/dca.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
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
    </Routes>
  </BrowserRouter>,
)
