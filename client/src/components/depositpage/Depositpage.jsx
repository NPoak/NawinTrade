import'./Depositpage.css'
import Navbar_Login from '../Navbar/login'

function Deposit_p() {

  return (
    <div className='deposit_container'>
        <Navbar_Login />
        <div className='form shadow-lg shadow-gray-500 border-b-8 border-zinc-800 mx-auto relative'>
          <div className='batch green w-24 h-8 text-white text-center flex justify-center items-center shadow-md shadow-gray-700'>ฝากเงิน</div>
          <div className='w-auto h-40 theme1 pl-16'><p className='font-light text-2xl text-white pt-6'>นายชัชนันท์ บุญพา</p><p className='font-light text-sm'>เลขที่บัญชี 076420342</p><p className='font-light text-sm text-opacity-5 pt-10'>Broker : InnovestX</p></div>
          <div className='green w-52 h-8 text-white text-center ok shadow-md shadow-gray-700 flex justify-center items-center'>ยืนยันการฝากเงิน</div>
        </div>
        
    </div>
  )
}

export default Deposit_p