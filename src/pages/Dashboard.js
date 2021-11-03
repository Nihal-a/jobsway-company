import React, { useState, useEffect } from 'react'
import Sidenav from '../components/sidnav/Sidenav'
import { Link, useLocation, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { LOGOUT } from '../constants/actionTypes'




function Dashboard() {

    const [company, setCompany] = useState(JSON.parse(localStorage.getItem('company')))
    const [verify, setVerify] = useState(company?.company.status)
    const location = useLocation()
    const dispatch = useDispatch()
    const history = useHistory()


    useEffect(() => {
        location.state = undefined
    }, [location])

    const handleLogin = (e) => {
        e.preventDefault()
        localStorage.removeItem('company')
        setCompany(null)
        history.push('/')
    }

    const handleRegister = (e) => {
        e.preventDefault()
        localStorage.removeItem('company')
        setCompany(null)
        history.push('/register', { state: 'register' })
    }


    const UnVerify = () => {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-6xl font-semibold ">Hey <span className="text-primary">{company?.company.companyName},</span></h1>
                {company?.company.reason ? <><h2 className="text-2xl mt-4">Your Company has been Rejected.</h2>
                    <p className="text-center mt-6 text-md font-medium" style={{ color: 'red' }}>Reason : <br /> {company?.company.reason}</p>
                    <Link onClick={handleRegister} className="underline text-sm mt-8 text-primary">Re-register company</Link>
                </> : <><h2 className="text-4xl mt-4">Your Company has Created Successfully.</h2>
                    <p className="text-center mt-6 text-2xl font-light">JobsWay will Verify Your Company and Provide the <br /> Dashboard to you within 1 - 2 days</p>
                    <Link onClick={handleLogin} className="underline text-sm mt-8 text-primary">Back to login</Link>
                </>}
            </div>
        )
    }

    const Verified = () => {
        return (
            <>
                {company?.company.ban ? <>
                    <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-6xl font-semibold ">Hey <span className="text-primary">{company?.company.companyName},</span></h1>
                    <h2 className="text-2xl mt-4" style={{ color: 'red' }}>Your Company has been Blocked by JobsWay.</h2>
                    <h2 className="text-sm mt-4">We have noted some action against JobsWay's terms & conditions.</h2>
                    <Link onClick={handleLogin} className="underline text-sm mt-8 text-primary">Back to login</Link>
                    </div>
                 </> : <>
                    <Sidenav />

                </>}
            </>
        )
    }

    return (
        <div>
            {verify == true ? <Verified /> : <UnVerify />}
        </div>
    )
}

export default Dashboard
