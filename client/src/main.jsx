import './index.css';
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Deposit_p from './components/depositpage/Depositpage.jsx';
import Withdraw_p from './components/withdrawpage/Withdrawpage.jsx';
import Useracc_p from './components/useraccpage/Useraccpage.jsx';

import Loginpage from './pages/loginpage/Loginpage.jsx';
import Stockview from './pages/Stockview/Stockview.jsx';
import BuyStock from './pages/Buy_Stock/BuyStock.jsx';
import SellStock from './pages/Sell_Stock/SellStock.jsx';
import Userportfolio from './pages/User_portfolio/Userportfolio.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Loginpage   />}/> 
      <Route path='/deposit' element={<Deposit_p   />}/> 
      <Route path='/withdraw' element={<Withdraw_p   />}/> 
      <Route path='/account' element={<Useracc_p   />}/> 
      <Route path='/stockview' element={<Stockview   />}/> 
      <Route path='/buystock' element={<BuyStock />} />
      <Route path='/sellstock' element={<SellStock />} />
      <Route path='/portfolio' element={<Userportfolio />} />
    </Routes>
  </BrowserRouter>,
)
