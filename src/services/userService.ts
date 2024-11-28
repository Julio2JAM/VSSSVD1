import { API_URL, USER } from "../config/constant";
import { Role, User } from "../config/interfaces";
import { getErrorMessage, handleError } from "./errorService";


interface ErrorResponse{
    message:string
    status: number
}

export const getUsers = async ():Promise<User[]|ErrorResponse> => {
    try {

        const response = await fetch(`${API_URL}${USER}`, {
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

export const postUsers = async (form:FormData):Promise<User|ErrorResponse> => {
    try {

        const response = await fetch(`${API_URL}${USER}`, {
            method: 'POST',
            body: form,
        });
    
        if (!response.ok) {
            const defaultErrorMessage = 'Error al crear usuario';
            const message = await getErrorMessage(response) || defaultErrorMessage;
            throw new Error(message);
        }
    
        return await response.json() as User;
    } catch (error:unknown) {
        return handleError(error) as ErrorResponse;
    }
};

export const getRoles = async ():Promise<Role[]|ErrorResponse> => {
    try {

        const response = await fetch(`${API_URL}${USER}`, {
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

