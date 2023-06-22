import axios, { AxiosError, AxiosResponse } from 'axios';
import { UserData, BaseUrl } from './baseData';

const UserBaseUrl = `${BaseUrl}/users`;

/**
 * Registers a new user.
 *
 * @param data - The user data for registration.
 * @returns A promise that resolves to the Axios response.
 * @throws An error if the request fails or an error occurs.
 */
export const RegisterUser = async (data: UserData): Promise<AxiosResponse  | undefined> => {
    try {
        const response = await axios.post(UserBaseUrl, data, { withCredentials: true });
        return response;
    } catch (error) {
        return handleAxiosError(error as AxiosError);
    }
};

/**
 * Updates an existing user.
 *
 * @param data - The updated user data.
 * @returns A promise that resolves to the Axios response.
 * @throws An error if the request fails or an error occurs.
 */
export const UpdateUser = async (data: UserData): Promise<AxiosResponse  | undefined> => {
    const userId = data.id;
    const url = `${UserBaseUrl}/${userId}`;

    try {
        const response = await axios.put(url, data, { withCredentials: true });
        return response;
    } catch (error) {
        return handleAxiosError(error as AxiosError);
    }
};

/**
 * Deletes a user.
 *
 * @param data - The user data to delete.
 * @returns A promise that resolves to the Axios response.
 * @throws An error if the request fails or an error occurs.
 */
export const DeleteUser = async (data: UserData): Promise<AxiosResponse  | undefined> => {
    const userId = data.id;
    const url = `${UserBaseUrl}/${userId}`;

    try {
        const response = await axios.delete(url, { withCredentials: true });
        return response;
    } catch (error) {
        return handleAxiosError(error as AxiosError);
    }
};

/**
 * Retrieves all users.
 *
 * @returns A promise that resolves to the Axios response.
 * @throws An error if the request fails or an error occurs.
 */
export const GetUsers = async (): Promise<AxiosResponse  | undefined> => {
    try {
        const response = await axios.get(UserBaseUrl, { withCredentials: true });
        return response;
    } catch (error) {
        return handleAxiosError(error as AxiosError);
    }
};

/**
 * Retrieves information for a single user by ID.
 *
 * @param id - The ID of the user to retrieve.
 * @returns A promise that resolves to the Axios response.
 * @throws An error if the request fails or an error occurs.
 */
export const GetOneUser = async (id: number): Promise<AxiosResponse  | undefined> => {
    const url = `${UserBaseUrl}/${id}`;

    try {
        const response = await axios.get(url, { withCredentials: true });
        return response;
    } catch (error) {
        return handleAxiosError(error as AxiosError);
    }
};

/**
 * Handles the Axios error by throwing a formatted error.
 *
 * @param error - The Axios error.
 * @throws The formatted error.
 */
const handleAxiosError = (error: AxiosError): undefined => {
    if (error.response) {
        const { status, data } = error.response;
        console.error(`Request failed with status: ${status}\nResponse data: ${JSON.stringify(data)}`);
    } else if (error.request) {
        console.error(`No response received: ${error.request}`);
    } else {
        console.error(`Error during request setup: ${error.message}`);
    }
    return undefined;
};
