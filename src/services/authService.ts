import { API_URL, HTTP_STATUS, REGISTER } from "../config/constant";
import { User } from "../config/interfaces";

interface CreateUserResponse{
    user?:User,
    message:string
    status: number; 
}

export const CreateUser = async (email: string, password: string):Promise<CreateUserResponse> => {
    try {

        const response = await fetch(`${API_URL}${REGISTER}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
    
        if (!response.ok) {
            throw new Error('Error al registrar el usuario');
        }
    
        return await response.json();
    } catch (error:unknown) {
        const response = {
            message: error instanceof Error ? error.message : "Ha ocurrido un error de conexion.",
            status:HTTP_STATUS.INTERNAL_SERVER_ERROR
        }
        return response;
    }
};

