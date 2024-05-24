import './StaffDashboard.css'
import Navbar_Login from '../../../components/Navbar/login'
import DashBoardGraph from '../../../components/graph/DashBoardGraph'
import Pieshard from '../../../components/graph/Pieshard.jsx'

function StaffDashboard() {
  return (
    <div className='staff-dash-container'>
      <Navbar_Login />
      <div className="dash-box-1 relative p-10">
        <div className='absolute text-xl left-3 -top-5 w-36 h-10 rounded-sm box-shadow flex justify-center items-center theme2 text-white z-50'>Dash Board</div>
        <div className='z-0 absolute h-72 top-0 left-0 right-0 theme1'></div>
        <div className='absolute top-12 right-10 left-10 bottom-8 grid grid-cols-12 grid-rows-12 gap-5'>
          <div className=' col-span-8 row-span-10 pt-5 bg-white shadow-md'>
            <DashBoardGraph />
          </div>
          <div className=' col-span-2 row-span-5 color2 p-5 flex flex-col items-center'>
            <div className='text-white text-4xl pb-3'>ออเดอร์</div>
            <div className='text-white text-7xl font-bold'>23</div>
            <div className='text-white pb-4 text-lg'>+15.6%</div>
            <div className='text-white'>ณ วันที่ 24 พ.ค 2567</div>
          </div>
          <div className=' col-span-2 row-span-10 color1 p-5 grid grid-rows-11'>
            <div className=' row-span-5 flex flex-col items-center'>
              <div className='text-white text-4xl pb-3'>จำนวนหุ้น</div>
              <div className='text-white text-7xl font-bold'>7</div>
              <div className='text-white pb-4 text-lg'>หุ้น</div>
              <div className='text-white'>มูลค่ารวม <span>$24,578 USD</span></div>
            </div>
            <div className='row-span-1 pt-5'><hr  className='text-xl'/></div>
            <div className=' row-span-5 flex flex-col items-center pt-2'>
              <div className='text-white text-4xl pb-3'>มูลค่า</div>
              <div className='text-white text-3xl font-bold mt-5 mb-4'>$23,567.03</div>
              <div className='text-white pb-4 text-lg'>USD</div>
              <div className='text-white'> <span>ณ วันที่ 24 พ.ค 256</span></div>
            </div>
          </div>
          <div className=' col-span-2 row-span-5 color3  p-5 flex flex-col items-center'>
            <div className='text-white text-4xl pb-3'>บัญชี</div>
            <div className='text-white text-7xl font-bold'>2</div>
            <div className='text-white pb-4 text-lg'>+0 บัญชี</div>
            <div className='text-white'>ณ วันที่ 24 พ.ค 2567</div>
          </div>
          <div className=' col-span-12 row-span-2 flex gap-6'>
            <div className='text-black text-xl'>ค่าเฉลี่ยใน 1 สัปดาห์ : <span>$14,582.34 USD</span> </div>
            <div className='text-black'>สูงสุด : <span>$2,350.78 USD</span></div>
            <div className='text-black'>ต่ำสุด : <span>$0.12 USD</span></div>
          </div>
        </div>
      </div>
      <div className='dash-box-2 grid grid-cols-12 gap-x-10'>
        <div className='col-span-8 box-shadow p-8'>
          <div className='flex justify-between items-end'>
            <div className='text-3xl text-black'>รายชื่อหุ้นทั้งหมด</div>
            <div>ข้อมูล ณ วันที่ 30 เม.ย 2467</div>
          </div>
          <div className='flex justify-between mt-4'>
            <div>10 รายการ</div>
            <div>all net volume</div>
          </div>
          <div className='min-w-max mt-6'>
            {/*box stock */}
            <div className="stock-box p-4 hover:bg-gray-200">
              <a href="/stock/AAPL">
                <div className='flex justify-between mb-3 text-2xl font-normal text-black'>
                  <div className=''>หุ้น : <span>AAPL</span> <span>$179.03</span></div>
                  <div>28.93</div>
                </div>
                <div className='flex  justify-between'>
                  <div className='font-light'>Apple - Inc</div>
                  <div>มูลค่าทั้งหมด <span className=''>$12,891.87 USD</span></div>
                </div>
              </a>
            </div>
            {/*box stock */}
            
          </div>
        </div>
        <div className=' col-span-4 grid grid-rows-12 gap-y-10'>
          <div className=' row-span-5 box-shadow p-8'>
            {/* <div className='text-3xl text-black'>สัดส่วนหุ้นทั้งหมด</div> */}
            <div>
              <Pieshard />
            </div>
          </div>
          <div className=' row-span-7 box-shadow p-8'>
            <div className='text-3xl text-black'>บัญชีลูกค้า</div>
            <div className='flex justify-between mt-4'>
              <div>10 บัญชี</div>
              <div>เลขที่บัญชี</div>
            </div>
            <div className='min-w-max mt-6'>
            {/*box account */}
            <div className="stock-box p-4">
                <div className='flex justify-between mb-3 font-normal text-black'>
                  <div className=''>Nawin Tosilanon</div>
                  <div>No. 123456789</div>
                </div>
                <div className='font-light'>มูลค่าพอร์ตที่ลงทุน <span>$12,891.87 USD</span></div>
            </div>
            {/*box account */}
            
          </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default StaffDashboard
