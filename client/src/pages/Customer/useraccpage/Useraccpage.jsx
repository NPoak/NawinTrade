import'./Useraccpage.css'
import Navbar_Login from '../../../components/Navbar/login'
import { useEffect, useState } from "react"
import axios from "axios";
import  { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import Swal from 'sweetalert2'

function Useracc_p() {
    const [data] = useState({'cookies': Cookies.get('user-auth')})
    const navigate = useNavigate()
    
    const [userViewData, setData] = useState()
    const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

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

    useEffect(()=> {
      const getData = async() => {
        try {
          const res = await axios.post('http://127.0.0.1:5000/api/customerView/profile', data)
          console.log(res.status)
          if(res.status != 200){
            navigate("/login")
          }
          setData(res.data)
          //console.log(res.data)
          
        } catch (error) {
          console.log(error)
          Toast.fire({
            icon: 'error',
            title: 'เกิดข้อผิดพลาดกรุณา login',
          })
          navigate("/login")
        }
      }
    getData()
    }, [])
    console.log(userViewData)

  return (
    <div className='acc_container'>
        {userViewData == undefined ? 
        <div className="loading-container">
          <span className="loading loading-bars loading-sm text-accent"></span>
        </div>
        :
        <>
        <Navbar_Login />
        <div className='form shadow-lg shadow-gray-500 mx-auto relative bounce'>
            <div className='batch theme2 w-36 h-10 text-white text-center flex text-xl justify-center items-center shadow-md shadow-gray-700'>บัญชีของฉัน</div>
            <div className='w-auto h-64 theme1 px-16 py-8'><p className='font-light text-3xl text-white pt-6'>{userViewData.fName} {userViewData.lName}</p><p className='font-light text-sm'>เลขที่บัญชี {userViewData.AccountNo}</p><p className='font-light text-sm text-opacity-5 pt-8'>Broker : InnovestX</p><p className='font-bold text-sm text-white pt-8'>เลือกรายการ</p></div>
            <div className='circle-frame rounded-full theme2 flex justify-center items-center circle'><div className='circle-inner rounded-full theme1'><p className='text-lg text-white flex justify-center items-center pt-10'>ยอดเงินทั้งหมด</p><p className='text-3xl text-white font-bold flex justify-center items-center pt-7'>{formatter.format(userViewData.AccountBalance)}</p><p className='text-md flex justify-center items-center pt-1'>USD</p></div></div>
            <div className='w-auto h-8 theme1 bar'></div>
            <div className='relative'>
                <div className='absolute -top-12 left-16 grid grid-cols-3 gap-x-3'>
                    <a onClick={() => navigate("/deposit", {state:{userViewData}})} className='w-9 h-9 green flex justify-center items-center cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-person-fill-up" viewBox="0 0 16 16" style={{ fill: 'white' }}>
                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.854 1.5 1.5a.5.5 0 0 1-.708.708L13 11.707V14.5a.5.5 0 0 1-1 0v-2.793l-.646.647a.5.5 0 0 1-.708-.708l1.5-1.5a.5.5 0 0 1 .708 0M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                    <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4"/>
                    </svg>
                    </a>
                    <a onClick={() => navigate("/withdraw", {state:{userViewData}})}  className='w-9 h-9 red flex justify-center items-center cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-person-fill-down" viewBox="0 0 16 16" style={{ fill: 'white' }}>
                    <path d="M12.5 9a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m.354 5.854 1.5-1.5a.5.5 0 0 0-.708-.708l-.646.647V10.5a.5.5 0 0 0-1 0v2.793l-.646-.647a.5.5 0 0 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                    <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4"/>
                    </svg>
                    </a>
                    <a onClick={() => navigate("/paymenthistory", {state:{userViewData}})} className='w-9 h-9 theme3 flex justify-center items-center cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16" style={{ fill: 'white' }}>
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                    </svg>
                    </a>
                    <p className='text-black text-xs font-extralight text-center'>ฝากเงิน</p>
                    <p className='text-black text-xs font-extralight text-center'>ถอนเงิน</p>
                    <p className='text-black text-xs font-extralight text-center'>ประวัติ</p>
                </div>
            </div>
            <div className='text-black text-2xl font-medium px-16 pt-5 pb-6 flex justify-start items-center'>ข้อมูลส่วนตัว
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
            </svg>
            </div>
            <div className='px-16 grid grid-cols-3 gap-x-8'>
                    <p className='text-xs font-extralight text-left'>ชื่อ</p>
                    <p className='text-xs font-extralight text-left'>นามสกุล</p>
                    <p className='text-xs font-extralight text-left'>ธนาคาร</p>
                    <div className='textbox bg-white text-black flex justify-start items-center pl-2 pr-2 shadow-md shadow-gray-400'>{userViewData.fName}</div>
                    <div className='textbox bg-white text-black flex justify-start items-center pl-2 pr-2 shadow-md shadow-gray-400'>{userViewData.lName}</div>
                    <div className='textbox bg-white text-black flex justify-start items-center pl-2 pr-2 shadow-md shadow-gray-400'>{userViewData.BankAccount}</div>
            </div>
            <div className='px-16 grid grid-cols-12 pt-8 gap-8'>
                <div className='col-span-3'>
                    <p className='text-xs font-extralight text-left'>วัน/เดือน/ปีเกิด</p>
                    <div className='textbox bg-white text-black flex justify-start items-center pl-2 pr-2 shadow-md shadow-gray-400'>{userViewData.DOB}</div>
                </div>
                <div className='col-span-4'>
                    <p className='text-xs font-extralight text-left'>เบอร์โทรศัพท์</p>
                    <div className='textbox bg-white text-black flex justify-start items-center pl-2 pr-2 shadow-md shadow-gray-400'>{userViewData.Phone}</div>
                </div>   
                <div className='col-span-5'>
                    <p className='text-xs font-extralight text-left'>E-mail</p>
                    <div className='textbox bg-white text-black flex justify-start items-center pl-2 pr-2 shadow-md shadow-gray-400'>{userViewData.Email}</div>
                </div>
            </div>
            <div className='px-16 pt-8 grid grid-cols-1'>
                    <p className='text-xs font-extralight text-left'>ที่อยู่</p>
                    <div className='textbox bg-white text-black flex justify-start items-center pl-2 pr-2 shadow-md shadow-gray-400'>{userViewData.Address}</div>
            </div>
        </div>
        </>}
    </div>
  )
}

export default Useracc_p