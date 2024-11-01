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
    return {
        message: error instanceof Error ? error.message : "Ha ocurrido un error de conexión.",
        status: HTTP_STATUS.INTERNAL_SERVER_ERROR,
    };
};