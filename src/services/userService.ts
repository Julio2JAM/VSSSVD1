import { API_URL, GET_USER } from "../config/constant";
import { Role, User } from "../config/interfaces";
import { getErrorMessage, handleError } from "./errorService";


interface ErrorResponse{
    message:string
    status: number
}

export const getUsers = async ():Promise<User[]|ErrorResponse> => {
    try {

        const response = await fetch(`${API_URL}${GET_USER}`, {
            method: 'GET',
        });
    
        if (!response.ok) {
            const defaultErrorMessage = 'Error al obtener usuarios';
            const message = await getErrorMessage(response) || defaultErrorMessage;
            throw new Error(message);
        }
    
        return await response.json() as User[];
    } catch (error:unknown) {
        return handleError(error) as ErrorResponse;
    }
};


export const getRoles = async ():Promise<Role[]|ErrorResponse> => {
    try {

        const response = await fetch(`${API_URL}${GET_USER}`, {
            method: 'GET',
        });
    
        if (!response.ok) {
            const defaultErrorMessage = 'Error al obtener usuarios';
            const message = await getErrorMessage(response) || defaultErrorMessage;
            throw new Error(message);
        }
    
        return await response.json() as Role[];
    } catch (error:unknown) {
        return handleError(error) as ErrorResponse;
    }
};

