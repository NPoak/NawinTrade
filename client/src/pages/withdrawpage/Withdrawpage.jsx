import'./Withdrawpage.css'
import Navbar_Login from '../../components/Navbar/login'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState} from 'react'
import Swal from 'sweetalert2'

function Withdraw_p() {
  const param = useLocation()
  const navigate = useNavigate()
  const [Amounts, setAmounts] = useState(0)

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

  const handleChange = (event) => {
    const value = event.target.value;
    if(value >= 0){
      setAmounts(value)
    }else{
      Toast.fire({
        icon: 'error',
        title: 'เกิดข้อผิดพลาดขี้นกรุณาใส่ใหม่',
      })
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    Swal.showLoading()
    if(Amounts != 0){
      try {
          //const res = await axios.post('http://127.0.0.1:5000/api/customerMake/makeOrder/', Data)
          //console.log(res.status)
          Swal.fire({
            title: 'ถอนเงินสำเร็จ',
            icon: 'success',
            confirmButtonText: 'ตกลง'
          }, navigate("/account"))
      
      } catch(error) {
          console.log(error);
      }
    }else{
      Swal.fire({
        title: 'กรุณากรอกจำนวนเงิน',
        icon: 'error',
        confirmButtonText: 'ตกลง'
      })
    }
  }

  useEffect(() => {
    if(param.state == null){
      navigate('/account')
    }
  },[])

  return (
    <div className='withdraw_container'>
        {param.state != undefined ? <>
        <Navbar_Login />
        <div className='bounce forms shadow-lg shadow-gray-500 border-b-8 border-zinc-800 mx-auto relative'>
          <div className='batch red w-36 h-10 text-xl text-white text-center flex justify-center items-center shadow-md shadow-gray-700'>ถอนเงิน</div>
          <div className='w-auto h-52 theme1 pl-16'><p className='font-light text-3xl text-white pt-12'>นายชัชนันท์ บุญพา</p><p className='font-light text-sm'>เลขที่บัญชี 076420342</p><p className='font-light text-sm text-opacity-5 pt-10'>Broker : InnovestX</p></div>
          <div className="h-80 mt-10 mb-8 px-20 flex flex-col justify-start">
          <div className="text-black text-xl mt-5">จำนวนเงินในบัญชี {param.state.userViewData.BankAccount}</div>
              <div className="flex justify-between px-10 my-6 text-3xl text-orange-400 font-bold"><span className='font-bold'>{param.state.userViewData.AccountBalance}</span>USD</div>
              <div className="label mt-10">
                  <span className="login-label">กรอกจำนวนเงินที่ต้องการถอน</span>
              </div>
              <input value={Amounts || " "} onChange={handleChange} type="number" name="Amounts" id="Username" placeholder="100.00 USD" data-theme="light" className="input mt-5 input-bordered input-warning w-full" />
              <div className="mt-2">ระบุราคาที่ต้องการซื้อขั้นต่ำ 1 USD สูงสุดไม่เกิน 100,000 USD</div>
          </div>
          <a onClick={handleSubmit}  className='red w-52 h-12 text-white text-xl text-center ok shadow-md shadow-gray-700 flex justify-center items-center cursor-pointer'>ยืนยันการฝากเงิน</a>
        </div> 
        </> : <></>}
        
    </div>
  )
}

export default Withdraw_p