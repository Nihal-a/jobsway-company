import React, { useState,useEffect } from 'react'
import noImage from '../assets/images/noImage.jpg'
import { useDispatch } from 'react-redux'
import {useHistory,useLocation} from 'react-router-dom'
import {register} from '../actions/auth'


const initialState = { companyName: '', industry: '', email: '', location: '', phone: '', bio: '', website: '', linkedIn: '', facebook: '', twitter: '', instagram: '', password: '', confirmPassword: '', status:false }

function Register() {


    const [formData, setformData] = useState(initialState)
    const [passwordErr, setPasswordErr] = useState('')
    const dispatch = useDispatch()
    const history  = useHistory()
    const location = useLocation()

    const handleSubmit = (e) => {
        e.preventDefault()
        setPasswordErr('')
        if(formData.password !== formData.confirmPassword) setPasswordErr('Passwords does not match.')
        delete formData.confirmPassword
        dispatch(register(formData,history))
    }
    const handleChange = (e) => {
        e.preventDefault()
        setformData({ ...formData, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        location.state = undefined
      },[location,formData])

    return (
        <div className="flex flex-col items-center py-8">
            <div className="">
                <h3 className="text-3xl font-semibold mt-8 text-center">Register Your <span className="text-primary">Company</span></h3>
                <form action="" className="flex flex-col items-start" onSubmit={handleSubmit} method="POST" encType="multipart/form-data">
                    <h6 className="mt-4 font-normal">Basic Details :</h6>
                    <p className="font-light text-secondary text-sm">Enter the details of company</p>
                    <div className="mt-3">
                        <input required onChange={handleChange} name="companyName" type="text" placeholder="Company Name" className="mr-0.5 text-sm w-48 h-10 rounded-md font-light border-none outline-none p-3 bg-secondary" />
                        <input required onChange={handleChange} name="industry" type="text" placeholder="Indutsry" className="ml-0.5 text-sm w-48 h-10 rounded-md font-light border-none outline-none p-3 bg-secondary" />
                    </div>
                    <input required onChange={handleChange} name="email" type="email" placeholder="Email" className="mt-3 ml-0.5 text-sm w-96 h-10 rounded-md font-light border-none outline-none p-3 bg-secondary"/>
                    <div className="mt-3">
                        <input required onChange={handleChange} name="location" type="text" placeholder="Location" className="mr-0.5 text-sm w-48 h-10 rounded-md font-light border-none outline-none p-3 bg-secondary" />
                        <input required onChange={handleChange} name="phone" type="text" placeholder="Phone" className="ml-0.5 text-sm w-48 h-10 rounded-md font-light border-none outline-none p-3 bg-secondary" />
                    </div>
                    <textarea onChange={handleChange} className="bio"  name="bio" placeholder="About your Company" className="text-sm font-light bg-secondary w-full mt-3 rounded-md h-40 border-none outline-none p-3 "/>
                    <h6 className="mt-28 font-normal">Connect Social Media : </h6>
                    <p className="font-light text-secondary text-sm">Input the links your accounts</p>
                    <div className="mt-3">
                        <input onChange={handleChange} name="website" type="text" placeholder="Website" className="mr-0.5 text-sm w-48 h-10 rounded-md font-light border-none outline-none p-3 bg-secondary" />
                        <input onChange={handleChange} name="linkedIn" type="text" placeholder="LinkedIn" className="ml-0.5 text-sm w-48 h-10 rounded-md font-light border-none outline-none p-3 bg-secondary" />
                    </div>
                    <div className="mt-3">
                        <input onChange={handleChange} name="facebook" type="text" placeholder="Facebook" className="mr-0.5 text-sm w-48 h-10 rounded-md font-light border-none outline-none p-3 bg-secondary" />
                        <input onChange={handleChange} name="twitter" type="text" placeholder="Twitter" className="ml-0.5 text-sm w-48 h-10 rounded-md font-light border-none outline-none p-3 bg-secondary" />
                    </div>
                    <div className="mt-3">
                        <input onChange={handleChange} name="instagram" type="text" placeholder="Instagram" className="ml-0.5 text-sm w-48 h-10 rounded-md font-light border-none outline-none p-3 bg-secondary" />
                    </div>
                    <h6 className="mt-20 font-normal">Create password :  </h6>
                    <input required onChange={handleChange} name="password" type="password" placeholder="Password" className="mt-1 ml-0.5 text-sm w-96 h-10 rounded-md font-light border-none outline-none p-3 bg-secondary" />
                    <input required onChange={handleChange} name="confirmPassword" type="Password" placeholder="Confirm Password" className="mt-2 ml-0.5 text-sm w-96 h-10 rounded-md font-light border-none outline-none p-3 bg-secondary" />
                    {location.state !== undefined && <p className="text-red-800 mt-2" style={{color:'red'}}>Company already exists</p> }
                    {passwordErr && <p className="text-red-800 text-sm" style={{color:'red'}}>{passwordErr}</p> }
                    <button className="w-full rounded-md my-5 bg-primary p-1" type="submit" style={{ color: '#fff' }}>Register Your Company</button>
                </form>
            </div>
        </div>
    )
}

export default Register
