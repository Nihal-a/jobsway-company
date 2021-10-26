import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Route, Redirect, Switch, useLocation, useHistory } from 'react-router-dom'
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";
import { LOGOUT } from "./constants/actionTypes";

function Routed() {

    const [company, setCompany] = useState(JSON.parse(localStorage.getItem('company')))
    const location = useLocation()
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        const token = company?.token

        if (token) {
            const decodedToken = jwtDecode(token)
            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
        setCompany(JSON.parse(localStorage.getItem('company')))
    }, [location])

    const logout = (e) => {
        dispatch({ type: LOGOUT });

        history.push('/');

        setCompany(null);
    }
    return (
        <Switch>
            <Route exact path="/">
                {company ? <Dashboard /> : <Redirect to="/login" />}
            </Route>
            <Route path="/login">
                {company ? <Redirect to="/" /> : <Login />}
            </Route>
            <Route path="/register">
                {company ? <Redirect to="/" /> : <Register />}
            </Route>
        </Switch>
    )
}

export default Routed
