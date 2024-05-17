import './stafforder.css'
import Navbar from '../../../components/Navbar/login'

function stafforder() {
  return (
    <div className='staff-order-container'>
      <Navbar />
      <div className='staff-order-box'>
        <div className='background p-8'>
            <div className="text-3xl text-white">ออเดอร์คำสั่ง ซื้อ-ขาย</div>
            <div>ใส่รายละเอียดของหุ้นที่ต้องการเพิ่ม</div>
        </div>
        <div className='order-contain'>
            <div className='box'>
                <div>
                    <div className='text-2xl font-normal'><span className='green text-white px-2 pt-1 mr-2 rounded-2xl'>ซื้อ</span><span className='text-black'>AAPL</span><span> -Apple inc.</span></div>
                    <div className='mt-4 text-black'>สถานะ : <span className='pending'>รอการยืนยัน</span></div>
                    <div className='mt-2'>ชื่อบัญชี : <span>Nawin Tosilanon</span></div>
                    <div className='mt-5'>เลขออเดอร์ : <span>12384723</span></div>
                </div>
                <div>
                    <div className='text-end mt-1 text-2xl text-black font-normal'>จำนวน : <span>1.533 หุ้น</span></div>
                    <div className='mt-4 text-end'>ณ ว้นที่ <span>17 พ.ค 67</span></div>
                    <div className='text-end mt-12'>
                        คำสั่งยืนยัน<span className='button red'>ยกเลิก</span><span className='button green'>ตกลง</span>
                    </div>
                </div>
            </div>
            <div className='box'>
                <div>
                    <div className='text-2xl font-normal'><span className='red text-white px-2 pt-1 mr-2 rounded-2xl'>ขาย</span><span className='text-black'>AAPL</span><span> -Apple inc.</span></div>
                    <div className='mt-4 text-black'>สถานะ : <span className='pending'>รอการยืนยัน</span></div>
                    <div className='mt-2'>ชื่อบัญชี : <span>Nawin Tosilanon</span></div>
                    <div className='mt-5'>เลขออเดอร์ : <span>12384723</span></div>
                </div>
                <div>
                    <div className='text-end mt-1 text-2xl text-black font-normal'>จำนวน : <span>1.533 หุ้น</span></div>
                    <div className='mt-4 text-end'>ณ ว้นที่ <span>17 พ.ค 67</span></div>
                    <div className='text-end mt-12'>
                        คำสั่งยืนยัน<span className='button red'>ยกเลิก</span><span className='button green'>ตกลง</span>
                    </div>
                </div>
            </div>
            <div className='box'></div>
            <div className='box'></div>
            <div className='box'></div>
        </div>
      </div>
    </div>
  )
}

export default stafforder
