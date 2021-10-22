import React, { useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { useHistory ,Link,useLocation} from 'react-router-dom'
import { login } from '../actions/auth'


const initialState = { email: '', password: '' }

function Login() {

    const [formData, setformData] = useState(initialState)
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()

    useEffect(() => {
        location.state = undefined
    },[location])

    const handleChange = (e) => {
        e.preventDefault()
        setformData({...formData,[e.target.name] : e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login(formData,history))
    }

    return (
        <div className="flex justify-center items-center h-screen text-4xl font-semibold flex-col">
            <form action="" className="flex flex-col justify-between items-center" onSubmit={handleSubmit}>
                <h3 className="-mt-10"><span className="text-primary">Log In to your</span> Company</h3>
                {location.state !== undefined ? <p className="text-sm font-light mt-3" style={{color:'red'}}>{location.state.Err}</p> : null}
                <input required onChange={handleChange} name="email" type="email" placeholder="Email" className="m-1 mt-8 text-sm w-96 h-10 rounded-md font-light border-none outline-none p-3 bg-secondary" />
                <input required onChange={handleChange} name="password" type="password" placeholder="Password" className="m-1 text-sm w-96 h-10 rounded-md font-light border-none outline-none p-3 bg-secondary" />
                <a href="" className="text-sm font-light underline w-full text-right mr-14 mt-2">Forgot Password</a>
                <button type="submit" className="text-white text-lg bg-primary px-7 py-1 m-3 rounded-lg font-medium" style={{ color: '#fff' }}>Sign In</button>
            </form>
            <p className="mt-4 text-sm font-light">
                Company not registerd?
                <Link to="/register" style={{ color: "#008FAE" }} className="underline">
                    Register now
                </Link>
            </p>
        </div>
    )
}

export default Login
