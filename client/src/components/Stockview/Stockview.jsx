import "./Stockview.css"

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
              <div className="stock-title">AAPL</div>
              <p>Stock Price & Overview</p>
              <div><span  className="stock-price">$166.9</span><span className="stock-growth">+0.87 (0.51%)</span><span className="update-date">4:00 PM 04/26/24</span></div>
              <div className="stock-description"></div>
            </div>
            <div className="stock-list-container">list</div>
            <div className="stock-reccommend-container">reccommend</div>

        </div>
    </div>
  )
}

export default Stockview
