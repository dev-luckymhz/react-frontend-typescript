import { UserData, BaseUrl } from "./baseData";
import axios, { AxiosError, AxiosResponse } from 'axios';
import {handleAxiosError} from "./errorHanddling.services";

const AuthBaseUrl = `${BaseUrl}/auth`;

/**
 * User registration function.
 *
 * @param data - User data for registration.
 * @returns Promise that resolves to the Axios response.
 * @throws Error if registration fails or an error occurs during the request.
 */
export const UserRegister = async (data: UserData): Promise<AxiosResponse> => {
    try {
        const response = await axios.post(AuthBaseUrl + '/register', data);
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
        const response = await axios.post(AuthBaseUrl + '/login', data);
        return response;
    } catch (error) {
        handleAxiosError(error as AxiosError);
        throw error;
    }
};

