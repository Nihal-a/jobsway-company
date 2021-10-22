import { REGISTER,LOGOUT, LOGIN} from "../constants/actionTypes"

export default  (state = {authData : null},action) => {
    switch (action.type) {
        case REGISTER:
            localStorage.setItem('company',JSON.stringify({...action?.data}))
            return {...state,authData:action?.data}
        case LOGIN:
            localStorage.setItem('company',JSON.stringify({...action?.data}))
            return {...state,authData:action?.data}
        case LOGOUT:
            localStorage.clear()
            return {...state,authData:null, loading: false, errors: null}
        default:
            return state
    }
}