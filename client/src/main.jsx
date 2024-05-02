import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Loginpage from './components/loginpage/Loginpage.jsx';
import Stockview from './components/Stockview/Stockview.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Loginpage   />}/> 
      <Route path='/stockview' element={<Stockview   />}/> 
    </Routes>
  </BrowserRouter>,
)
