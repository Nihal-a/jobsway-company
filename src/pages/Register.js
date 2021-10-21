import React from 'react'
import noImage from '../assets/images/noImage.jpg'

function Register() {
    return (
        <div className="flex flex-col items-center py-8">
            <div className="">
                <h3 className="text-3xl font-semibold mt-8 text-center">Register Your <span className="text-primary">Company</span></h3>
                <form action="" className="flex flex-col items-start">
                    <h6 className="mt-4 font-normal">Basic Details :</h6>
                    <p className="font-light text-secondary text-sm">Enter the details of company</p>
                    <div className="mt-3">
                        <input type="text" placeholder="Company Name" className="mr-0.5 text-sm w-48 h-10 rounded-md font-light border-none outline-none p-3 bg-secondary" />
                        <input type="text" placeholder="Indutsry" className="ml-0.5 text-sm w-48 h-10 rounded-md font-light border-none outline-none p-3 bg-secondary" />
                    </div>
                    <input type="email" placeholder="Email" className="mt-3 ml-0.5 text-sm w-96 h-10 rounded-md font-light border-none outline-none p-3 bg-secondary" />
                    <div className="mt-3">
                        <input type="text" placeholder="Location" className="mr-0.5 text-sm w-48 h-10 rounded-md font-light border-none outline-none p-3 bg-secondary" />
                        <input type="text" placeholder="Phone" className="ml-0.5 text-sm w-48 h-10 rounded-md font-light border-none outline-none p-3 bg-secondary" />
                    </div>
                    <textarea name="bio" placeholder="About your Company" className="text-sm font-light bg-secondary w-full mt-3 rounded-md h-40 border-none outline-none p-3 "></textarea>
                    <div className="flex flex-col items-center">
                        <img className="mt-3 w-40" src={noImage} alt="noImage" />
                    </div>
                    <h6 className="mt-28 font-normal">Connect Social Media : </h6>
                    <p className="font-light text-secondary text-sm">Input the links your accounts</p>
                    <div className="mt-3">
                        <input type="text" placeholder="Website" className="mr-0.5 text-sm w-48 h-10 rounded-md font-light border-none outline-none p-3 bg-secondary" />
                        <input type="text" placeholder="LinkedIn" className="ml-0.5 text-sm w-48 h-10 rounded-md font-light border-none outline-none p-3 bg-secondary" />
                    </div>
                    <div className="mt-3">
                        <input type="text" placeholder="Facebook" className="mr-0.5 text-sm w-48 h-10 rounded-md font-light border-none outline-none p-3 bg-secondary" />
                        <input type="text" placeholder="Twitter" className="ml-0.5 text-sm w-48 h-10 rounded-md font-light border-none outline-none p-3 bg-secondary" />
                    </div>
                    <div className="mt-3">
                        <input type="text" placeholder="Instagram" className="ml-0.5 text-sm w-48 h-10 rounded-md font-light border-none outline-none p-3 bg-secondary" />
                    </div>
                    <h6 className="mt-20 font-normal">Create password :  </h6>
                    <input type="password" placeholder="Password" className="mt-1 ml-0.5 text-sm w-96 h-10 rounded-md font-light border-none outline-none p-3 bg-secondary"  />
                    <input type="Password" placeholder="Confirm Password" className="mt-2 ml-0.5 text-sm w-96 h-10 rounded-md font-light border-none outline-none p-3 bg-secondary"  />
                        <button className="w-full rounded-md my-5 bg-primary p-1" type="submit" style={{color:'#fff'}}>Register Your Company</button>
                </form>
            </div>
        </div>
    )
}

export default Register
