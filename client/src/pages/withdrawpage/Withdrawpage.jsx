import'./Withdrawpage.css'
import Navbar_Login from '../../components/Navbar/login'

function Withdraw_p() {

  return (
    <div className='withdraw_container'>
        <Navbar_Login />
        <div className='bounce forms shadow-lg shadow-gray-500 border-b-8 border-zinc-800 mx-auto relative'>
          <div className='batch red w-36 h-10 text-xl text-white text-center flex justify-center items-center shadow-md shadow-gray-700'>ถอนเงิน</div>
          <div className='w-auto h-52 theme1 pl-16'><p className='font-light text-2xl text-white pt-12'>นายชัชนันท์ บุญพา</p><p className='font-light text-sm'>เลขที่บัญชี 076420342</p><p className='font-light text-sm text-opacity-5 pt-10'>Broker : InnovestX</p></div>
          <div className="h-80 mt-5 mb-8 px-20 flex flex-col justify-start">
              <div className="text-black text-xl mt-5">จำนวนเงินในบัญชี SCB</div>
              <div className="flex justify-between px-10 my-6 text-2xl"><span>1234</span>USD</div>
              <div className="label mt-1">
                  <span className="login-label">กรอกจำนวนเงินที่ต้องการถอน</span>
              </div>
              <input type="number" name="username" id="Username" placeholder="100.00 USD" data-theme="light" className="input input-bordered input-warning w-full" />
              <div className="mt-2">ระบุราคาที่ต้องการซื้อขั้นต่ำ 1 USD สูงสุดไม่เกิน 100,000 USD</div>
          </div>
          <a href='/withdraw' className='red w-52 h-12 text-white text-xl text-center ok shadow-md shadow-gray-700 flex justify-center items-center'>ยืนยันการฝากเงิน</a>
        </div>
        
    </div>
  )
}

export default Withdraw_p