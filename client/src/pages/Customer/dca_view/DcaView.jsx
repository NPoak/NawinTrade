import "../dca/dca.css"
import "./DcaViwe.css"
import Navbar_Login from '../../../components/Navbar/login'

function DcaView() {
  return (
    <div className='dca_container'>
            <Navbar_Login />
            <div className='bounce forms shadow-lg shadow-gray-500 border-b-8 border-zinc-800 mx-auto relative'>
                <div className='absolute top-5 -left-1 theme2 w-44 h-10 text-white text-center text-xl flex justify-center items-center shadow-md shadow-gray-700 rounded-sm'>การ DCA ของฉัน</div>
                <div className='absolute top-5 left-48 w-10 h-10 flex justify-center items-center'>
                    <a href="/dca">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                            <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                        </svg>
                    </a>
                </div>
                <div className='w-auto h-36 theme1 pl-16 mb-3 pt-4'><p className='font-light text-sm text-opacity-5 pt-16'>List การ DCA ทั้นหมดในบัญชี</p></div>
                <div className="dca-view-container">
                    <div id="dca-1">
                        <div className="dca-view-box flex justify-between">
                            <div>
                                <div className="text-black text-3xl mb-5">หุ้น : <span>AAPL</span></div>
                                <div className="mb-3">วันที่ DCA : ทุกวันที่ <span>5</span> ของเดือน</div>
                                <div>จำนวนเงิน <span className="text-green-400 text-lg">200</span> USD</div>
                            </div>
                            <div>
                                <div className=" text-red-600 text-xl">สิ้นสุดวันที่ : <span >17 พ.ค 2568</span></div>
                            </div>
                        </div>
                        <div className="px-10"><hr /></div>
                    </div>
                    
                </div>
                    
            </div>
        </div>
  )
}

export default DcaView
