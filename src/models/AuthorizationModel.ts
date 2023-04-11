export interface AuthorizationState {
    login: string;
    email: string;
}

export type AuthorizationActionsModel = REGISTER | LOGIN;

export interface REGISTER {
    type: "REGISTER";
    login: string;
    email: string;
    password: string;
}

export interface LOGIN{
    type: "LOGIN";
    login: string;
    email: string;
    password: string;
}