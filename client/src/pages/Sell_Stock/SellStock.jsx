import './SellStock.css'
import Navbar from '../../components/Navbar/login'
import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import { useState } from 'react'
import logo from "../../assets/Nawin-Logo.png"
import axios from "axios";
import Navbar_Login from "../../components/Navbar/login"
import  { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'



function SellStock() {
  const location = useLocation()
  const [Data, setData] = useState({ 'StockSymbol':'AAPL','Amounts':'1000','AccountBalance':'4000','OrderType':'Sell','cookies': Cookies.get('user-auth')})
  const navigate = useNavigate()

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(values => ({...values, [name]: value}))
    console.log(Data)
}

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(Data);

    try {
        const res = await axios.post('http://127.0.0.1:5000/api/customerMake/makeOrder/', Data)
        console.log(res.status)
    
    } catch(error) {
        console.log(error);
    }
  }


  useEffect(() => {
    console.log(location.state)
  }, [location])


  return (
    <div className="sell-stock-container">
      <Navbar />
      <div className="sell-stock-box">
        <div className="upper-box">
          <div><span className="sell-box">ขาย</span><span className="sell-title font-bold pl-20">AAPL</span></div>
          <div className="sell-price font-semibold mt-2">$169.89 USD </div>
          <div className="sell-description mt-2"><span>สูงสุด </span><span> 170.61 </span> | <span> ต่ำสุด </span><span> 168.15</span></div>
          <div className="sell-description mt-2">มูลค่าตลาด</div>
          <div className="decoration"></div>
        </div>
        <div className="middle-box pt-4">
          <div className="text-black text-xl">จำนวนหุ้นที่ต้องการขาย</div>
          <div className="input-box">
            <input type="number" value={Data.Amounts || ""} onChange={handleChange} name="Amounts" id="Amounts" placeholder="0.01" data-theme="light" className="w-full" />
            <div className='absolute top-20 right-10 text-black'>หุ้น</div>
          </div>
          <div className="mt-2">ระบุราคาที่ต้องการซื้อขั้นต่ำ 1 USD สูงสุดไม่เกิน 100,000 USD</div>
      
          <div className="text-black my-2 text-xl mt-6">ราคาที่ได้</div>
          <div className="flex justify-between px-10 my-8 text-2xl"><span>0.001</span>USD</div>
        </div>
        <div className="accept-box flex justify-between items-center">
          <div className="flex flex-col justify-between">
            <div>
              ยอดเงินที่ได้
            </div>
            <div className="text-3xl font-bold text-white">
              1,646.57 USD
            </div>
          </div>
          <button onClick={handleSubmit}  className="sell-stock-btn">ยืนยันคำสั่งขาย</button>
        </div>
      </div>  
    </div>
  )
}

export default SellStock
