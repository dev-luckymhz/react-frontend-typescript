import {UserData, BaseUrl} from "./baseData";

import axios, { AxiosError, AxiosResponse } from 'axios';

/**
 * User registration function.
 * @param data - User data for registration.
 * @returns Promise that resolves to the Axios response.
 * @throws Error if registration fails or an error occurs during the request.
 */
export const UserRegister = async (data: UserData): Promise<AxiosResponse> => {
    try {
        const response = await axios.post(AuthBaseUrl, data);
        return response;
    } catch (error) {
        // Handle errors
        if (axios.isAxiosError(error)) {
            const axiosError: AxiosError = error;
            if (axiosError.response) {
                // The request was made and the server responded with a status code outside the range of 2xx
                // You can access the response data, status, headers, etc. here
                console.error('Request failed with status:', axiosError.response.status);
                console.error('Response data:', axiosError.response.data);
            } else if (axiosError.request) {
                // The request was made but no response was received
                console.error('No response received:', axiosError.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error during request setup:', axiosError.message);
            }
        } else {
            // This error is not an Axios error
            console.error('An error occurred:', error);
        }

        throw error;
    }
};


const AuthBaseUrl = `${BaseUrl}/register`;


