import { API_URL, LOGIN, REGISTER } from "../config/constant";
import { User } from "../config/interfaces";
import { getErrorMessage, handleError } from "./errorService";

interface NewUserResponse{
    user:User,
    message:string
    status: number; 
}

interface LoginResponse{
    token:string
    user:User
    message:string
    status: number
}

interface ErrorResponse{
    message:string
    status: number
}

export const CreateUser = async (email: string, password: string):Promise<NewUserResponse|ErrorResponse> => {
    try {

        const response = await fetch(`${API_URL}${REGISTER}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
    
        if (!response.ok) {
            const defaultErrorMessage = 'Error al iniciar sesión el usuario';
            const message = await getErrorMessage(response) || defaultErrorMessage;
            throw new Error(message);
        }
    
        return await response.json();
    } catch (error:unknown) {
        return handleError(error);
    }
};


export const Login = async (email: string, password: string):Promise<LoginResponse|ErrorResponse> => {
    try {
        const response = await fetch(`${API_URL}${LOGIN}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
    
        if (!response.ok) {
            const defaultErrorMessage = 'Error al iniciar sesión el usuario';
            const message = await getErrorMessage(response) || defaultErrorMessage;
            throw new Error(message);
        }
    
        return await response.json() as LoginResponse;
    } catch (error:unknown) {
        return handleError(error) as ErrorResponse;
    }
};
