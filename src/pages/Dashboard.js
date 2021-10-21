import React,{useState} from 'react'
import Sidenav from '../components/sidnav/Sidenav'

function Dashboard() {

    const [verify, setVerify] = useState(false)

    const UnVerify = () => {
        return(
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-6xl font-semibold ">Hey,<span className="text-primary">Google</span></h1>
                <h2 className="text-4xl mt-4">Your Company has Created Successfully.</h2>
                <p className="text-center mt-6 text-2xl font-light">JobsWay will Verify Your Company and Provide the <br /> Dashboard to you within 1 - 2 days</p>
                <a href="" className="underline text-sm mt-8 text-primary">Back to login</a>
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
