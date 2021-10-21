import { } from "../constants/actionTypes"

export default  (state = {authData : null},action) => {
    switch (action.type) {
        case "SIGNUP":
            return state
        default:
            return state
    }
}