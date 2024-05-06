import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Loginpage from './pages/Stockview/loginpage/Loginpage.jsx';
import Stockview from './components/Stockview/Stockview.jsx';
import BuyStock from './components/Buy_Sell_Stock/BuyStock.jsx';
import SellStock from './components/Buy_Sell_Stock/SellStock.jsx';
import Userportfolio from './components/User_portfolio/Userportfolio.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Loginpage   />}/> 
      <Route path='/stockview' element={<Stockview   />}/> 
      <Route path='/buystock' element={<BuyStock />} />
      <Route path='/sellstock' element={<SellStock />} />
      <Route path='/portfolio' element={<Userportfolio />} />
    </Routes>
  </BrowserRouter>,
)
