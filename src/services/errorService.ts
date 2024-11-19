import { HTTP_STATUS } from "../config/constant";

export const getErrorMessage = async (response: Response): Promise<string | null> => {
    try {
        if (response.status === HTTP_STATUS.INTERNAL_SERVER_ERROR) {
            return null;
        }
        const responseJson = await response.json();
        return responseJson?.message || null;
    } catch (error) {
        return null;
    }
};

export const handleError = (error: unknown): { message: string; status: number } => {

    const message = error instanceof TypeError && error.message === "Failed to fetch" 
    ? "No se pudo establecer la conexión. Por favor, verifica tu conexión a Internet." 
    : (error instanceof Error ? error.message : "Ha ocurrido un error de conexión.");
    
    return {
        message: message,
        status: HTTP_STATUS.INTERNAL_SERVER_ERROR,
    };

};