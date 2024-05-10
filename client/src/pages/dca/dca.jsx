import './dca.css'
import Navbar_Login from '../../components/Navbar/login'

function Dca(){
    return (
        <div className='dca_container'>
            <Navbar_Login />
            <div className='form shadow-lg shadow-gray-500 border-b-8 border-zinc-800 mx-auto relative'>
                <div className='absolute top-3 -left-1 theme2 w-44 h-8 text-white text-center flex justify-center items-center shadow-md shadow-gray-700 rounded-sm'>การตั้งค่า DCA</div>
                <div className='w-auto h-28 theme1 pl-9 mb-3'><p className='font-light text-sm text-opacity-5 pt-16'>ตั้งค่า Dollar - Cost Averaging (รายเดือน) แบบกำหนดเอง</p></div>
                    <div className='px-20 grid grid-rows-2 gap-y-10'>
                        <div>
                            <p className='text-black font-normal'>เลือกหุ้นที่ต้องการ DCA</p>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full h-8 bg-white" />
                        </div>
                        <div>
                            <p className='text-black font-normal'>ระบุจำนวนเงิน</p>
                            <div className='relative'><input type="text" placeholder="Type here" className="input input-bordered w-full h-8 bg-white" /><p className='text-black absolute top-1 right-3'>USD</p></div>
                        </div>
                    </div>
                    <div className='pt-10 px-20 grid grid-cols-2 gap-x-8'>
                        <div>
                            <p className='text-black font-normal'>วันที่</p>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full h-8 bg-white" style={{width : "100%"}}/>
                        </div>
                        <div>
                            <p className='text-black font-normal'>วันสิ้นสุด</p>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full h-8 bg-white" style={{width : "100%"}}/>
                        </div>
                    </div>
                <div className='theme1 w-52 h-8 text-white text-center ok shadow-md shadow-gray-700 flex justify-center items-center'>ยืนยันการตั้งค่า</div>
            </div>
        </div>

    )
}

export default Dca