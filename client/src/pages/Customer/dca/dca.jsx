import './dca.css'
import Navbar_Login from '../../../components/Navbar/login'
import axios from 'axios';
import Cookies from "js-cookie";

function Dca(){
    return (
        <div className='dca_container'>
            <Navbar_Login />
            <div className='bounce forms shadow-lg shadow-gray-500 border-b-8 border-zinc-800 mx-auto relative'>
                <div className='absolute top-5 -left-1 theme2 w-44 h-10 text-white text-center text-xl flex justify-center items-center shadow-md shadow-gray-700 rounded-sm'>การตั้งค่า DCA</div>
                <div className='w-auto h-36 theme1 pl-16 mb-3 pt-4'><p className='font-light text-sm text-opacity-5 pt-16'>ตั้งค่า Dollar - Cost Averaging (รายเดือน) แบบกำหนดเอง</p></div>
                    <div className='px-20 pt-10 grid grid-rows-2 gap-y-14'>
                        <div>
                            <p className='text-black font-normal'>เลือกหุ้นที่ต้องการ DCA</p>
                            <input type="text" placeholder="Type here" className="input input-bordered input-success w-full h-12 bg-white" />
                        </div>
                        <div>
                            <p className='text-black font-normal'>ระบุจำนวนเงิน</p>
                            <div className='relative'><input type="number" placeholder="0.00" className="input input-bordered input-success w-full h-12 bg-white" /><p className='text-black absolute top-3 right-3'>USD</p></div>
                        </div>
                    </div>
                    <div className='pt-16 px-20 grid grid-cols-2 gap-x-8'>
                        <div>
                            <p className='text-black font-normal'>วันที่</p>
                            <input type="number" placeholder="Ex. 1" className="input input-bordered input-success w-full h-12 bg-white" style={{width : "100%"}}/>
                        </div>
                        <div>
                            <p className='text-black font-normal'>วันสิ้นสุด</p>
                            <input type="date" placeholder="Type here" className="input input-bordered input-success w-full h-12 bg-white" style={{width : "100%"}}/>
                        </div>
                    </div>
                <a href='/dca' className='theme1 w-52 h-12 text-xl text-white text-center ok shadow-md shadow-gray-700 flex justify-center items-center'>ยืนยันการตั้งค่า</a>
            </div>
        </div>

    )
}

export default Dca