import './Userportfolio.css'
import Navbar from '../../components/Navbar/login'
import { useState, useEffect } from 'react'
import axios from 'axios';
import Cookies from "js-cookie";
import  { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function Userportfolio() {
    let percent1 = 50.3
    let percent2 = 30.1

    const [data] = useState({ 'cookies': Cookies.get('user-auth') })
    const [stockDetail, setStockDetail] = useState({AllVol : 0, investBalance : 0, netGrowth : 0, netGrowth_USD : 0, StockList : [{StockSymbol : "", StockRatio: 0, StockGrowth: 0, StockGrowth_USD : 0}]});
    const navigate = useNavigate();
    const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
    //console.log(Cookies.get('user-auth'));

    const [PortfolioData, setPortfolioData] = useState()

    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      iconColor: 'white',
      customClass: {
        popup: 'colored-toast',
      },
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    })

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
          Toast.fire({
            icon: 'error',
            title: 'เกิดข้อผิดพลาดกรุณา login',
          })
          navigate("/login")
        }
      }
      getData()

    }, [])

    //mapping data
    useEffect(() => {
      if (PortfolioData !== undefined) {
        var sumVol = 0;
        var investBalance = 0;
        var netGrowth = 0;
        var netGrowth_USD = 0;
        PortfolioData.forEach(element => {
          sumVol += element.netVol
          investBalance += element.netVol*element.currentPrice
        });
        
        var StockList = [];
        PortfolioData.forEach((element) => {
          StockList.push({StockSymbol : element.StockSymbol, StockRatio : element.netVol/sumVol*100, StockGrowth : (element.currentPrice - element.SecondLatestEOD_Price)/element.SecondLatestEOD_Price * 100, StockGrowth_USD : (element.currentPrice - element.SecondLatestEOD_Price) * element.netVol})
        });

        StockList.forEach(element => {
          netGrowth += element.StockGrowth
          netGrowth_USD += element.StockGrowth_USD
        })
        setStockDetail({AllVol : sumVol, investBalance : investBalance, netGrowth : netGrowth, netGrowth_USD : netGrowth_USD, StockList : StockList})
      }
    }, [PortfolioData])
    

    console.log(stockDetail)
    console.log(PortfolioData)

    
  return (
    <>
    {PortfolioData == undefined ? 
      <div className="loading-container">
      <span className="loading loading-bars loading-sm text-accent"></span>
      </div>
      :
      <>
      <Navbar />
      <div className='port-container bounce'>
      <div className='port-background'></div>
      <div className="port-box absolute">
        <div className='title-container'>เงินลงทุนทั้งหมด</div>
        <div>
            <div className={'overall-money'}>{stockDetail.investBalance.toFixed(2)}<span className='ml-6 text-xl'>USD</span></div>
            <div className='stock-ratio-bar'>
                <div className='label'>สัดส่วนการลงทุน</div>
                <div className='stock-label flex'>
                  {stockDetail.StockList.map((element, index) => (
                    <div key={index} className='stock' style={{ width: (element.StockRatio * 5.5) + "px" }}>
                      {element.StockRatio < 10 ? null : <div className='percent'>{(element.StockRatio).toFixed(2)}%</div>}
                      {element.StockRatio < 20 ? null : <>{element.StockSymbol}</>}
                    </div>
                  ))}
                </div>

            </div>
        </div>
        <div className='port-growth'>
            <div className='label'>การเติบโตของพอร์ต</div>
            <div className={`${stockDetail.netGrowth < 0 ? 'growth-red' : 'growth-green'}`}>{stockDetail.netGrowth.toFixed(2)} %({formatter.format(stockDetail.netGrowth_USD)})</div>
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
            <div>พอร์ตฟอลิโอของ</div>
            <div className='text-sm'>คุณ ชัชนันท์ บุญพา</div>
        </div>
      </div>
      <div className="stock-list">
        <div className='title'>รายชื่อหุ้นที่ลงทุน</div>
        <div className='number-stock'>{stockDetail.StockList.length} รายการ</div>
          {stockDetail.StockList.map((element, index) => (
            <div key={index} className='stock'>
              <div>
                <div className="symbol">{element.StockSymbol}</div>
                <div className="company">Apple Inc.</div>
              </div>
              <div className='stock-ratio'>{element.StockRatio.toFixed(2)} %</div>
                <div><div className='invest-money text-right'>145.64 USD</div>
                <div className={`${element.StockGrowth < 0 ? 'stock-growth-red' : 'stock-growth-green'} text-right`}>{element.StockGrowth.toFixed(2)}% ({formatter.format(element.StockGrowth_USD)} USD)</div>
              </div>
            </div>
            
          ))}
      </div>
      </div>
      </>}
      </>
      
  )
}

export default Userportfolio
