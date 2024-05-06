import './SellStock.css'
import Navbar from '../../components/Navbar/login'


function SellStock() {
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
            <input type="text"   name="username" id="Username" placeholder="0.01" data-theme="light" className="w-full" />
          </div>
          <div className="mt-2">ระบุราคาที่ต้องการซื้อขั้นต่ำ 1 USD สูงสุดไม่เกิน 100,000 USD</div>
      
          <div className="text-black my-2 text-xl mt-10">ราคา</div>
          <div className="flex justify-between px-10 my-8 text-2xl"><span>0.001</span>USD</div>
        </div>
        <div className="accept-box flex justify-between items-center">
          <div className="flex flex-col justify-between">
            <div>
              ยอดที่ต้องชำระ
            </div>
            <div className="text-3xl font-bold text-white">
              1,646.57 USD
            </div>
          </div>
          <button className="sell-stock-btn">ยืนยันคำสั่งขาย</button>
        </div>
      </div>  
    </div>
  )
}

export default SellStock
