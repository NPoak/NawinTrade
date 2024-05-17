import "./staffaddstock.css"
import Navbar from "../../../components/Navbar/login"

function staffaddstock() {
  return (
    <div className="add-stock-container">
    <Navbar />
        <div className="add-stock-box">
            <div className="background p-10">
                <div className="text-3xl text-white">เพิ่มหุ้น</div>
                <div>ใส่รายละเอียดของหุ้นที่ต้องการเพิ่ม</div>
            </div>
            <div className="add-stock-form grid grid-cols-2 grid-rows-5 gap-y-4 gap-x-8">
                <div className="col-span-1">
                    <div className="mb-2 text-black">Stock symbol</div>
                    <input type="text" name="username" id="Username" placeholder="username" data-theme="light" className="input input-bordered input-success w-full" />
                </div>
                <div className="col-span-1">
                <div className="mb-2 text-black">Company name</div>
                    <input type="text" name="username" id="Username" placeholder="username" data-theme="light" className="input input-bordered input-success w-full" />
                </div>
                <div className="col-span-2">
                    <div className="mb-2 text-black">Industry</div>
                    <input type="text" name="username" id="Username" placeholder="username" data-theme="light" className="input input-bordered input-success w-full" />
                </div>
                <div className="col-span-2">
                <div className="mb-2 text-black">Exchange</div>
                <input type="text" name="username" id="Username" placeholder="username" data-theme="light" className="input input-bordered input-success w-full" />
                </div>
                <div className="col-span-1">
                    <div className="mb-2 text-black">Sector</div>
                    <input type="text" name="username" id="Username" placeholder="username" data-theme="light" className="input input-bordered input-success w-full" />
                </div>
                <div className="col-span-1">
                    <div className="mb-2 text-black">Website</div>
                    <input type="text" name="username" id="Username" placeholder="username" data-theme="light" className="input input-bordered input-success w-full" />
                </div>
                <div className="col-span-2">
                    <div className="mb-2 text-black">Market cap</div>
                    <input type="text" name="username" id="Username" placeholder="username" data-theme="light" className="input input-bordered input-success w-full" />
                </div>
            </div>
            <div className="text-center">
                <div className="btn text-white">ยืนยันการเพิ่มหุ้น</div>
            </div>
        </div>
    </div>
  )
}

export default staffaddstock
