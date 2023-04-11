import {AuthorizationActionsModel, AuthorizationState} from "../models/AuthorizationModel";


const initialState:AuthorizationState = {
    login: "",
    email: ""
}
export const AuthorizationModel = (state:AuthorizationState=initialState,action:AuthorizationActionsModel) => {
    switch (action.type){
        case "LOGIN":
            return {...state, login:action.login, email:action.email};
        case "REGISTER":
            return {...state, login:action.login, email:action.email};
        default:
            return state;
    }
}
export default 1;