import './index.css';
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Loginpage from './components/loginpage/Loginpage.jsx';
import Stockview from './components/Stockview/Stockview.jsx';
import Deposit_p from './components/depositpage/Depositpage.jsx';
import Withdraw_p from './components/withdrawpage/Withdrawpage.jsx';
import Useracc_p from './components/useraccpage/Useraccpage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Loginpage   />}/> 
      <Route path='/stockview' element={<Stockview   />}/>
      <Route path='/deposit' element={<Deposit_p   />}/> 
      <Route path='/withdraw' element={<Withdraw_p   />}/> 
      <Route path='/account' element={<Useracc_p   />}/> 
    </Routes>
  </BrowserRouter>,
)
