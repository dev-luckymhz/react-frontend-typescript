import { UserData, BaseUrl } from "./baseData";
import axios, { AxiosError, AxiosResponse } from 'axios';
import {handleAxiosError} from "./errorHanddling.services";


/**
 * User registration function.
 *
 * @param data - User data for registration.
 * @returns Promise that resolves to the Axios response.
 * @throws Error if registration fails or an error occurs during the request.
 */
export const UserRegister = async (data: UserData): Promise<AxiosResponse> => {
    try {
        const response = await axios.post(  '/register', data);
        return response;
    } catch (error) {
        handleAxiosError(error as AxiosError);
        throw error;
    }
};

/**
 * User login function.
 *
 * @param data - User data for login.
 * @returns Promise that resolves to the Axios response.
 * @throws Error if login fails or an error occurs during the request.
 */
export const UserLogin = async (data: UserData): Promise<AxiosResponse> => {
    try {
        const response = await axios.post( '/login', data);
        return response;
    } catch (error) {
        handleAxiosError(error as AxiosError);
        throw error;
    }
};


/**
 * Get user information.
 *
 * @returns Promise that resolves to the Axios response.
 * @throws Error if getting user information fails or an error occurs during the request.
 */
export const getUser = async (): Promise<AxiosResponse> => {
    try {
        const response = await axios.get( '/user');
        return response;
    } catch (error) {
        handleAxiosError(error as AxiosError);
        throw error;
    }
};

