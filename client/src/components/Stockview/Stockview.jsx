import "./Stockview.css"
import StockGrahp from "../graph/StockGraph"

function Stockview() {
  
  return (
    <div className="stock-container">
        <div className="navbar">navbar</div>
        <div className="stock-layout">
            <div className="stock-search-container flex items-center">
                <div className="search-input">
                    <input data-theme="light" className="" type="text" placeholder="Stock symbols Name" />
                </div>
            </div>
            <div className="stock-view-container">
              <div className="grid grid-cols-4">
                <div className="col-span-3">
                  <div className="stock-title text-5xl font-bold">AAPL<span className="font-bold">- Apple Inc.</span></div>
                  <p className="my-2">Stock Price & Overview</p>
                  <div className="my-1"><span  className="stock-price text-4xl font-medium">$166.9</span><span className="stock-growth text-2xl font-bold"> +0.87 (0.51%)</span><span className="update-date"> 4:00 PM 04/26/24</span></div>
                  <div className="stock-description my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, possimus.</div>
                </div>
                <div className="user-stock text-center flex justify-center items-center flex-col">
                  <div className="text-black mb-3">จำนวนหุ้นที่ถือ</div>
                  <div className="text-2xl text-black font-semibold">3846.04<span>หุ้น</span></div>
                </div>
              </div>
              <hr className="mt-10 mb-5"/>
              <div className="flex gap-10 justify-center">
                <div className="stock-history-graph">
                  <div className="date-select">
                    <p className="text-3xl pl-8 mb-5">AAPL<span> - Apple Inc.</span></p>
                    <div className="date-block">
                      <div>10D</div>
                      <div>1M</div>
                      <div>6M</div>
                      <div>1Y</div>
                      <div>5Y</div>
                    </div>
                  </div>
                  <div id="stockChartContainer">
                    <StockGrahp /> 

                  </div>
                  <div className="brief-stock col-span-3 flex mt-10 gap-10 justify-center">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                  </div>
                </div>
                <div className="stock-box-description">
                  <div className="box">
                    <div className="line1 mb-1"><span className="symbol"><img src="" alt="" /></span><span className="title text-3xl text-neutral-950">AAPL</span></div>
                    <div className="line2">ภาพรวมของหุ้นและบริษัท</div>
                    <div className="line3 flex justify-between"><span className="text-green-600">สูงสุด</span><span className="text-rose-500">ต่ำสุด</span></div>
                    <div className="line4 flex justify-between text-2xl"><span className="low-price text-green-600 font-bold">170.61</span><span className="high-price text-rose-500 font-bold">168.15</span></div>
                    <div className="line5 flex justify-between"><span className="box-label">Company</span><span className="box-label">Apple Inc.</span></div>
                    <div className="line6 flex justify-between"><span className="box-label">Exchange</span><span className="box-label">-</span></div>
                    <div className="line7 flex justify-between"><span className="box-label">Market cap</span><span className="box-label">-</span></div>
                    <div className="line8 flex justify-between"><span className="box-label">Dividend Yield</span><span className="box-label">-</span></div>
                    <div className="line9 flex justify-between"><span className="box-label">Sector</span><span className="box-label">-</span></div>
                    <div className="line10 flex justify-between"><span className="box-label">Industry</span><span className="box-label">-</span></div>
                    <div className="line11 flex justify-between"><span className="box-label">Website</span><span className="box-label">-</span></div>
                  </div>
                  <div className="buysell-stock flex">
                    <div className="buy">ซื้อ</div>
                    <div className="sell">ขาย</div>
                  </div>
                </div>
              </div>
            </div>

        </div>
    </div>
  )
}

export default Stockview
