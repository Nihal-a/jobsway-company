import React,{useState} from 'react'
import { Icon } from '@iconify/react';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../constants/actionTypes';
import { useHistory } from 'react-router-dom';



function Sidenav() {

    const [company, setCompany] = useState(JSON.parse(localStorage.getItem('company')))
    const dispatch = useDispatch()
    const history = useHistory()

    const logout = (e) => {
        e.preventDefault()
        dispatch({type : LOGOUT});
        
        history.push('/');
        
        setCompany(null);
    }

    return (
        <div className="h-screen w-64 bg-white border-r-2 flex flex-col justify-between items-center">
            <a className="font-semibold text-xl mt-4">JobsWay.</a>

            <div className="flex items-start justify-start h-auto flex-col mx-16 mb-20">
                <a href="" className="nav-items flex my-2 items-center justify-start">
                    <Icon icon="akar-icons:home" className="mr-3 text-xl" />
                    <p className="text-lg font-light">Dashboard</p>
                </a>
                <a href="" className="nav-items flex my-2 items-center justify-start">
                    <Icon className="mr-3 text-xl" icon="bx:bx-buildings" />
                    <p className="text-lg font-light">Companies</p>
                </a>
                <a href="" className="nav-items flex my-2 items-center justify-start">
                    <Icon className="mr-3 text-xl" icon="clarity:users-line" />
                    <p className="text-lg font-light">Users</p>
                </a>
                <a href="" className="nav-items flex my-2 items-center justify-start">
                    <Icon className="mr-3 text-xl" icon="bytesize:settings" />
                    <p className="text-lg font-light">Settings</p>
                </a>
                <a href="" className="nav-items flex my-2 items-center justify-start" onClick={logout}>
                    <Icon className="mr-3 text-xl" icon="simple-line-icons:logout" />
                    <p className="text-lg font-light">Logout</p>
                </a>
            </div>

            <h4 className="mb-6">{company.company.companyName}</h4>
        </div>
    )
}

export default Sidenav
