import { REGISTER} from "../constants/actionTypes"

export default  (state = {authData : null},action) => {
    switch (action.type) {
        case REGISTER:
            localStorage.setItem('company',JSON.stringify({...action?.data}))
            return {...state,authData:action?.data}
        default:
            return state
    }
}