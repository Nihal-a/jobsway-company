import  Axios  from 'axios'
import React, { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {useHistory,useLocation,Link} from 'react-router-dom'
import {reregister} from '../actions/auth'
import noImage from '../assets/images/noImage.jpg'
import '../index.css'
import swal from 'sweetalert'


const initialState = { companyName: '', industry: '', email: '', location: '', phone: '', bio: '', website: '', linkedIn: '', facebook: '', twitter: '', instagram: '', password: '', confirmPassword: '', status:'' ,imgUrl : '',ban : false}

function Reregister() {
    const [company, setCompany] = useState(JSON.parse(localStorage.getItem('company')))
    const [formData, setformData] = useState(initialState)
    const [passwordErr, setPasswordErr] = useState('')
    const [image, setImage] = useState(noImage)
    const [phoneErr, setPhoneErr] = useState('')
    const location = useLocation()
    const dispatch = useDispatch()
    const history = useHistory()


    useEffect(() => {
        if (company) setformData(company.company)
    },[])
 
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
        console.log(formData);
        if(formData.phone.length < 10 ) return setPhoneErr('Phone number invalid.')

        const imageData = new FormData()
            imageData.append("file",image)
            imageData.append("upload_preset",process.env.REACT_APP_CLOUDINARY_NAME)

            Axios.post(`${process.env.REACT_APP_CLOUDINARY_BASE_URL}/image/upload`,imageData).then(({data}) => {
                formData.imgUrl = data.url
                dispatch(reregister(company.company._id,formData,history))
                swal("Good job!", "Re registration successful", "success");
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
                        <input value={formData.companyName} required onChange={handleChange} name="companyName" type="text" placeholder="Company Name" className="mr-0.5 text-sm w-48 h-10 rounded-md font-light border-none outline-none p-3 bg-secondary" />
                        <input value={formData.industry} required onChange={handleChange} name="industry" type="text" placeholder="Indutsry" className="ml-0.5 text-sm w-48 h-10 rounded-md font-light border-none outline-none p-3 bg-secondary" />
                    </div>
                    <input required value={formData.email} onChange={handleChange} name="email" type="email" placeholder="Email" className="mt-3 ml-0.5 text-sm w-96 h-10 rounded-md font-light border-none outline-none p-3 bg-secondary"/>
                    <div className="mt-3">
                        <input required value={formData.location} onChange={handleChange} name="location" type="text" placeholder="Location" className="mr-0.5 text-sm w-48 h-10 rounded-md font-light border-none outline-none p-3 bg-secondary" />
                        <input required value={formData.phone} onChange={handleChange} name="phone" type="text" placeholder="Phone" className="ml-0.5 text-sm w-48 h-10 rounded-md font-light border-none outline-none p-3 bg-secondary" />
                    </div>
                    <textarea onChange={handleChange} value={formData.bio}   name="bio" placeholder="About your Company" className="text-sm font-light bg-secondary w-full mt-3 rounded-md h-40 border-none outline-none p-3 "/>
                    <div className="w-full h-40 mt-4 flex items-center flex-col">
                        <img src={formData.imgUrl} alt="" className="w-36 rounded-md" />
                        <div className="bg-dark relative overflow-hidden h-10 mt-2 flex items-center p-3 rounded-md ">
                            <span className="text-sm text-white font-light">Upload Logo</span>
                            <input type="file" className="absolute inset-0 text-md pointer opacity-0 w-28 h-16 bg-primary" accept="image/*" onChange={handleImageChange}/>
                        </div>
                    </div>
                    <h6 className="mt-28 font-normal">Connect Social Media : </h6>
                    <p className="font-light text-secondary text-sm">Input the links your accounts</p>
                    <div className="mt-3">
                        <input onChange={handleChange} value={formData.website} name="website" type="text" placeholder="Website" className="mr-0.5 text-sm w-48 h-10 rounded-md font-light border-none outline-none p-3 bg-secondary" />
                        <input onChange={handleChange} value={formData.linkedIn} name="linkedIn" type="text" placeholder="LinkedIn" className="ml-0.5 text-sm w-48 h-10 rounded-md font-light border-none outline-none p-3 bg-secondary" />
                    </div>
                    <div className="mt-3">
                        <input onChange={handleChange} value={formData.facebook} name="facebook" type="text" placeholder="Facebook" className="mr-0.5 text-sm w-48 h-10 rounded-md font-light border-none outline-none p-3 bg-secondary" />
                        <input onChange={handleChange} value={formData.twitter} name="twitter" type="text" placeholder="Twitter" className="ml-0.5 text-sm w-48 h-10 rounded-md font-light border-none outline-none p-3 bg-secondary" />
                    </div>
                    <div className="mt-3">
                        <input onChange={handleChange} value={formData.instagram} name="instagram" type="text" placeholder="Instagram" className="ml-0.5 text-sm w-48 h-10 rounded-md font-light border-none outline-none p-3 bg-secondary" />
                    </div>
                    <button className="w-full rounded-md my-5 bg-primary p-1" type="submit" style={{ color: '#fff' }}>Re-Register Company</button>
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

export default Reregister
