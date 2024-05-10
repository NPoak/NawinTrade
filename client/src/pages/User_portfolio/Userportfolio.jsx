import './Userportfolio.css'
import Navbar from '../../components/Navbar/login'
import { useState, useEffect } from 'react'
import axios from 'axios';
import Cookies from "js-cookie";
import  { useNavigate } from 'react-router-dom'

function Userportfolio() {
    let percent1 = 50.3
    let percent2 = 30.1

    const [data] = useState({ 'cookies': Cookies.get('user-auth') })
    const navigate = useNavigate();
    //console.log(Cookies.get('user-auth'));

    const [PortfolioData, setPortfolioData] = useState()

    useEffect(() => {
      const getData = async () => {
        try {
          const res = await axios.post('http://127.0.0.1:5000/api/customerView/portfolio', data)
          console.log(res.status)
          if (res.status != 200) {
            navigate("/login")
          }
          setPortfolioData(res.data)
          
        } catch (error) {
          console.log(error)
        }
      }
      getData()
    }, [])
    console.log(PortfolioData)
    
  return (
    <div className='port-container'>
      <Navbar />
      <div className='port-background'></div>
      <div className="port-box">
        <div className='title-container'>เงินลงทุนทั้งหมด</div>
        <div>
            <div className='overall-money'>58,234<span className='ml-6 text-xl'>USD</span></div>
            <div className='stock-ratio-bar'>
                <div className='label'>สัดส่วนการลงทุน</div>
                    <div className='stock-label flex'>
                        <div className='stock' style={{width : (percent1*5.5)+"px"}}>{percent1 < 10 ? <></> : <div className='percent'>{percent1}%</div>}{percent1 < 20 ? <></>: <>AAPL</>}</div>
                        <div className='stock' style={{width : (percent2*5.5)+"px"}}>{percent2 < 10 ? <></> : <div className='percent'>{percent2}%</div>}{percent2 < 20 ? <></>: <>AMZN</>}</div>

                    </div>
            </div>
        </div>
        <div className='port-growth'>
            <div className='label'>การเติบโตของพอร์ต</div>
            <div className='growth'>+4.34% ($2,467)</div>
            <div className='description mt-1'>ภาพรวมการเติบโตของพอร์ต</div>
            <div className='growth-graph'>
              <div className='stock' style={{height : "100px"}}><p>AAPL</p></div>
              <div className='stock' style={{height : "50px"}}><p>AMZN</p></div>
              <div className='stock' style={{height : "40px"}}><p>NVDA</p></div>
              <div className='stock' style={{height : "10px"}}><p>TSLA</p></div>
              <div className='stock' style={{height : "5px"}}><p>AVGO</p></div>

            </div>
        </div>
        <div className='port-footer px-10'>
            <div>พอร์ตฟอริโอของ</div>
            <div className='text-sm'>คุณ ชัชนันท์ บุญพา</div>
        </div>
      </div>
      <div className="stock-list">
        <div className='title'>รายชื่อหุ้นที่ลงทุน</div>
        <div className='number-stock'>10 รายการ</div>
            <div className='stock'><div><div className="symbol">AAPL</div><div className="company">Apple Inc.</div></div><div className='stock-ratio'>14.78%</div><div><div className='invest-money text-right'>145.64 USD</div><div className='stock-growth text-right'>4.6% (+176.3 USD)</div></div></div>
            <div className='stock'><div><div className="symbol">AAPL</div><div className="company">Apple Inc.</div></div><div className='stock-ratio'>14.78%</div><div><div className='invest-money text-right'>145.64 USD</div><div className='stock-growth text-right'>4.6% (+176.3 USD)</div></div></div>
            <div className='stock'><div><div className="symbol">AAPL</div><div className="company">Apple Inc.</div></div><div className='stock-ratio'>14.78%</div><div><div className='invest-money text-right'>145.64 USD</div><div className='stock-growth text-right'>4.6% (+176.3 USD)</div></div></div>
            <div className='stock'><div><div className="symbol">AAPL</div><div className="company">Apple Inc.</div></div><div className='stock-ratio'>14.78%</div><div><div className='invest-money text-right'>145.64 USD</div><div className='stock-growth text-right'>4.6% (+176.3 USD)</div></div></div>
      </div>
    </div>
  )
}

export default Userportfolio
