import axios, { AxiosError, AxiosResponse } from 'axios';
import { UserData, BaseUrl } from './baseData';
import {handleAxiosError} from "./errorHanddling.services";

const UserBaseUrl = `${BaseUrl}/users`;

/**
 * Registers a new user.
 *
 * @param data - The user data for registration.
 * @returns A promise that resolves to the Axios response.
 * @throws An error if the request fails or an error occurs.
 */
export const RegisterUser = async (data: UserData): Promise<AxiosResponse> => {
    try {
        const response = await axios.post(UserBaseUrl, data, { withCredentials: true });
        return response;
    } catch (error) {
        handleAxiosError(error as AxiosError);
        throw error;
    }
};

/**
 * Updates an existing user.
 *
 * @param data - The updated user data.
 * @returns A promise that resolves to the Axios response.
 * @throws An error if the request fails or an error occurs.
 */
export const UpdateUser = async (data: UserData): Promise<AxiosResponse> => {
    const userId = data.id;
    const url = `${UserBaseUrl}/${userId}`;

    try {
        const response = await axios.put(url, data, { withCredentials: true });
        return response;
    } catch (error) {
        handleAxiosError(error as AxiosError);
        throw error;
    }
};

/**
 * Deletes a user.
 *
 * @param data - The user data to delete.
 * @returns A promise that resolves to the Axios response.
 * @throws An error if the request fails or an error occurs.
 */
export const DeleteUser = async (data: UserData): Promise<AxiosResponse> => {
    const userId = data.id;
    const url = `${UserBaseUrl}/${userId}`;

    try {
        const response = await axios.delete(url, { withCredentials: true });
        return response;
    } catch (error) {
        handleAxiosError(error as AxiosError);
        throw error;
    }
};

/**
 * Retrieves all users.
 *
 * @returns A promise that resolves to the Axios response.
 * @throws An error if the request fails or an error occurs.
 */
export const GetUsers = async (): Promise<AxiosResponse> => {
    try {
        const response = await axios.get(UserBaseUrl, { withCredentials: true });
        return response;
    } catch (error) {
        handleAxiosError(error as AxiosError);
        throw error;
    }
};

/**
 * Retrieves information for a single user by ID.
 *
 * @param id - The ID of the user to retrieve.
 * @returns A promise that resolves to the Axios response.
 * @throws An error if the request fails or an error occurs.
 */
export const GetOneUser = async (id: number): Promise<AxiosResponse> => {
    const url = `${UserBaseUrl}/${id}`;

    try {
        const response = await axios.get(url, { withCredentials: true });
        return response;
    } catch (error) {
        handleAxiosError(error as AxiosError);
        throw error;
    }
};

