import './Loginpage.css'
import { useState } from 'react'
import logo from "../../assets/Nawin-Logo.png"

function Loginpage() {

    const [UserData, setUserData] = useState({})

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUserData(values => ({...values, [name]: value}))
        console.log(UserData)
      }

      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(UserData)
      }

  return (
    <div className='login-container'>
        <div className="login-navbar"></div>
        <div className="login-layout grid grid-cols-2 gap-4">
                <div>
                    <div className="login-logo flex justify-center items-center">
                        <img src={logo} alt="LOGO" />
                    </div>
                </div>
                <div className='relative flex items-center  '>
                    <form onSubmit={handleSubmit} className="login-form absolute text-center">
                        <p className='login-form-font'>Nawin trade</p>
                        <div className="mt-5 mb-8">
                            <div className="label">
                                <span className="login-label">เลือก broker</span>
                            </div>
                            <select type="text" value={UserData.broker || ""} onChange={handleChange} name='broker' data-theme="light" className="select select-bordered w-full">
                            <option>innovestx1</option>
                            <option>innovestx2</option>
                            <option>innovestx3</option>
                            </select>
                        </div>
                        <div className="mt-5 mb-8">
                            <div className="label">
                                <span className="login-label">Username</span>
                            </div>
                            <input type="text" value={UserData.username || ""} onChange={handleChange} name="username" id="Username" placeholder="username" data-theme="light" className="input input-bordered input-success w-full" />
                        </div>
                        <div className="my-3">
                            <div className="label">
                                <span className="login-label">password</span>
                            </div>
                            <input type="password" value={UserData.password || ""} onChange={handleChange} name="password" id="password" placeholder="8 letter or more" data-theme="light" className="input input-bordered input-success w-full" />
                        </div>

                        <div className="login-checkbox text-start my-5">
                            <input type="checkbox" className="checkbox relative checkbox-accent" />
                            <span className='checkbox-text absolute px-3'>keep my account on</span>
                        </div>

                        <input  className="login-btn flex justify-center items-center" type="submit" value={"login"} />

                    </form>
                </div>
            </div>
    </div>
  )
}

export default Loginpage
