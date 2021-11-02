import  Axios  from 'axios'
import React, { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {useHistory,useLocation,Link} from 'react-router-dom'
import {register} from '../actions/auth'
import noImage from '../assets/images/noImage.jpg'
import '../index.css'

const initialState = { companyName: '', industry: '', email: '', location: '', phone: '', bio: '', website: '', linkedIn: '', facebook: '', twitter: '', instagram: '', password: '', confirmPassword: '', status:false ,imgUrl : '',ban : false}

function Register() {

    const [formData, setformData] = useState(initialState)
    const [passwordErr, setPasswordErr] = useState('')
    const [image, setImage] = useState(noImage)
    const [phoneErr, setPhoneErr] = useState('')
    const location = useLocation()
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        location.state = undefined
    },[location])
 
    const handleImageChange = (e) => {
        const reader = new FileReader()
        reader.onload = () => {
            if(reader.readyState === 2) {
                setImage(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setPasswordErr('')
        if(formData.phone.length < 10 ) return setPhoneErr('Phone number invalid.')
        if(formData.password.length < 8 ) return setPasswordErr('Password must need minimum 8 characters.')
        if(formData.password !== formData.confirmPassword) setPasswordErr('Passwords does not match.')
        delete formData.confirmPassword

        const imageData = new FormData()
            imageData.append("file",image)
            imageData.append("upload_preset",process.env.REACT_APP_CLOUDINARY_NAME)

            Axios.post(`${process.env.REACT_APP_CLOUDINARY_BASE_URL}/image/upload`,imageData).then(({data}) => {
                formData.imgUrl = data.url
                dispatch(register(formData,history))
            }).catch((err) => {
                console.log("Image upload Err :" ,err);
            })
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
                {phoneErr && <p className="text-red-800 text-sm" style={{color:'red'}}>{phoneErr}</p> }
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
                    <textarea onChange={handleChange}  name="bio" placeholder="About your Company" className="text-sm font-light bg-secondary w-full mt-3 rounded-md h-40 border-none outline-none p-3 "/>
                    <div className="w-full h-40 mt-4 flex items-center flex-col">
                        <img src={image} alt="" className="w-36 rounded-md" />
                        <div className="bg-dark relative overflow-hidden h-10 mt-2 flex items-center p-3 rounded-md ">
                            <span className="text-sm text-white font-light">Upload Logo</span>
                            <input type="file" className="absolute inset-0 text-md pointer opacity-0 w-28 h-16 bg-primary" accept="image/*" onChange={handleImageChange} required/>
                        </div>
                    </div>
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
                    <div className="text-center w-full">
                    <p className="my-2 text-sm font-light ">
                Already on JobsWay?
                <Link to="/login" style={{ color: "#008FAE" }} className="underline ">
                    Log in now
                </Link>
            </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
