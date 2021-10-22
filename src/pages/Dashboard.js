import React,{useState,useEffect} from 'react'
import Sidenav from '../components/sidnav/Sidenav'
import { useLocation,Link } from 'react-router-dom'

function Dashboard() {

    const [company, setCompany] = useState(JSON.parse(localStorage.getItem('company')))
    const [verify, setVerify] = useState(company.company.status)
    const location = useLocation()

    useEffect(() => {
        
    }, [location])

    const UnVerify = () => {
        return(
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-6xl font-semibold ">Hey <span className="text-primary">{company.company.companyName},</span></h1>
                <h2 className="text-4xl mt-4">Your Company has Created Successfully.</h2>
                <p className="text-center mt-6 text-2xl font-light">JobsWay will Verify Your Company and Provide the <br /> Dashboard to you within 1 - 2 days</p>
                <Link to="/login" className="underline text-sm mt-8 text-primary">Back to login</Link>
            </div>
        )
    }

    const Verified = () => {
        return(
            <Sidenav />
        )
    }

    return (
        <div>
            {verify ? <Verified/> : <UnVerify/>}
        </div>
    )
}

export default Dashboard
