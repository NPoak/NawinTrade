import "./Consultportfolio.css"
import '../useraccpage/Useraccpage.css'
import '../User_portfolio/Userportfolio.css'
import Navbar from "../../components/Navbar/login"

function Consultportfolio() {
  return (
    <div className="consult-portfolio-container">
      <Navbar />
      <div className="px-72 text-3xl text-black">Portfolio ของลูกค้า</div>
      <div className='customer-port relative'>
        <div className="port-box">
        <div className='title-container'>ชัชนันท์ บุญพา</div>
        <div>
            <div className={'overall-money'}>1,234,567<span className='ml-6 text-xl'> USD</span></div>
            <div className='stock-ratio-bar'>
                <div className='label'>สัดส่วนการลงทุน</div>
                <div className='stock-label flex'>
                  {/* {stockDetail.StockList.map((element, index) => (
                    <div key={index} className='stock' style={{ width: (element.StockRatio * 5.5) + "px" }}>
                      {element.StockRatio < 10 ? null : <div className='percent'>{(element.StockRatio).toFixed(2)}%</div>}
                      {element.StockRatio < 20 ? null : <>{element.StockSymbol}</>}
                    </div>
                  ))} */}
                </div>

            </div>
        </div>
        <div className='port-growth'>
            <div className='label'>การเติบโตของพอร์ต</div>
            <div className={`growth-green`}>2.45 %(2,583.89)</div>
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
      </div>
      <div className='customer-port relative'>
        <div className="port-box">
        <div className='title-container'>ชัชนันท์ บุญพา</div>
        <div>
            <div className={'overall-money'}>1,234,567<span className='ml-6 text-xl'> USD</span></div>
            <div className='stock-ratio-bar'>
                <div className='label'>สัดส่วนการลงทุน</div>
                <div className='stock-label flex'>
                  {/* {stockDetail.StockList.map((element, index) => (
                    <div key={index} className='stock' style={{ width: (element.StockRatio * 5.5) + "px" }}>
                      {element.StockRatio < 10 ? null : <div className='percent'>{(element.StockRatio).toFixed(2)}%</div>}
                      {element.StockRatio < 20 ? null : <>{element.StockSymbol}</>}
                    </div>
                  ))} */}
                </div>

            </div>
        </div>
        <div className='port-growth'>
            <div className='label'>การเติบโตของพอร์ต</div>
            <div className={`growth-green`}>2.45 %(2,583.89)</div>
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
      </div>
      <div className='customer-port relative'>
        <div className="port-box">
        <div className='title-container'>ชัชนันท์ บุญพา</div>
        <div>
            <div className={'overall-money'}>1,234,567<span className='ml-6 text-xl'> USD</span></div>
            <div className='stock-ratio-bar'>
                <div className='label'>สัดส่วนการลงทุน</div>
                <div className='stock-label flex'>
                  {/* {stockDetail.StockList.map((element, index) => (
                    <div key={index} className='stock' style={{ width: (element.StockRatio * 5.5) + "px" }}>
                      {element.StockRatio < 10 ? null : <div className='percent'>{(element.StockRatio).toFixed(2)}%</div>}
                      {element.StockRatio < 20 ? null : <>{element.StockSymbol}</>}
                    </div>
                  ))} */}
                </div>

            </div>
        </div>
        <div className='port-growth'>
            <div className='label'>การเติบโตของพอร์ต</div>
            <div className={`growth-green`}>2.45 %(2,583.89)</div>
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
      </div>
    </div>
  )
}

export default Consultportfolio
