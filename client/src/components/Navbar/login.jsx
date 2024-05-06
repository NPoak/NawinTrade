import'./login.css'
import { useState } from 'react'
function Navbar_Login(){
        const[click, setClick] = useState(false)
        const handleClick = () => {
                setClick(!click);
                console.log(click)
              };
  return(
  <div className='navbar border-b-2 border-black'>
        <div className='flex justify-between w-full px-10'>
            <div>
                <button><b><a className='nt_logo font-bold'>Nawin Trade</a></b></button>
                <button><a className='menu'>ซื้อขายหุ้น</a></button>
                <button><a className='menu'>เปิดพอร์ต</a></button>
                <button><a className='menu'>ข่าวสาร</a></button>
                <button><a className='menu'>เกี่ยวกับเรา</a></button>
        </div>
        <div className='flex text-center'>
                <div className='w-6 h-6 profile_border rounded-full text-black flex justify-center items-center mr-3'>ช</div>
                <div className='w-auto h-6 user_border rounded-3xl text-white flex justify-center items-center mr-3 px-3'>ชัชนันท์ บุญพา</div>
                <div className='w-10 h-6 state rounded-3xl text-white flex justify-center items-center hover:bg-zinc-800'><button onClick={handleClick}>•••</button></div>
        </div>
        </div>
        {click ? 
        <div className='drops bg-zinc-800 flex-col'>
                <div className='p-3 text-white text-center border-white hover:border-b-2 hover:text-lg'><a>บัญชีของฉัน</a></div>
                <div className='p-3 text-white text-center border-white hover:border-b-2 hover:text-lg'><a href='/portfolio'>Portfolio ของฉัน</a></div>
                <div className='p-3 text-white text-center border-white hover:border-b-2 hover:text-lg'><a>ออกจากระบบ</a></div>
        </div>:<></>
        }
  </div>
  )}
  export default Navbar_Login