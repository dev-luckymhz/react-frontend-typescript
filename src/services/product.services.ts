import axios, { AxiosError, AxiosResponse } from 'axios';
import { ProductData, BaseUrl } from './baseData';
import { handleAxiosError } from "./errorHanddling.services";

const ProductBaseUrl = `${BaseUrl}/product`;

/**
 * Registers a new product.
 *
 * @param data - The product data for registration.
 * @returns A promise that resolves to the Axios response.
 * @throws An error if the request fails or an error occurs.
 */
export const RegisterProduct = async (data: ProductData): Promise<AxiosResponse> => {
    try {
        const response = await axios.post(ProductBaseUrl, data, { withCredentials: true });
        return response;
    } catch (error) {
        handleAxiosError(error as AxiosError);
        throw error;
    }
};

/**
 * Updates an existing product.
 *
 * @param data - The updated product data.
 * @returns A promise that resolves to the Axios response.
 * @throws An error if the request fails or an error occurs.
 */
export const UpdateProduct = async (data: ProductData): Promise<AxiosResponse> => {
    const productId = data.id;
    const url = `${ProductBaseUrl}/${productId}`;

    try {
        const response = await axios.put(url, data, { withCredentials: true });
        return response;
    } catch (error) {
        handleAxiosError(error as AxiosError);
        throw error;
    }
};

/**
 * Deletes a product.
 *
 * @param data - The product data to delete.
 * @returns A promise that resolves to the Axios response.
 * @throws An error if the request fails or an error occurs.
 */
export const DeleteProduct = async (data: ProductData): Promise<AxiosResponse> => {
    const productId = data.id;
    const url = `${ProductBaseUrl}/${productId}`;

    try {
        const response = await axios.delete(url, { withCredentials: true });
        return response;
    } catch (error) {
        handleAxiosError(error as AxiosError);
        throw error;
    }
};

/**
 * Retrieves all products.
 *
 * @returns A promise that resolves to the Axios response.
 * @throws An error if the request fails or an error occurs.
 */
export const GetProducts = async (): Promise<AxiosResponse> => {
    try {
        const response = await axios.get(ProductBaseUrl, { withCredentials: true });
        return response;
    } catch (error) {
        handleAxiosError(error as AxiosError);
        throw error;
    }
};

/**
 * Retrieves information for a single product by ID.
 *
 * @param id - The ID of the product to retrieve.
 * @returns A promise that resolves to the Axios response.
 * @throws An error if the request fails or an error occurs.
 */
export const GetOneProduct = async (id: number): Promise<AxiosResponse> => {
    const url = `${ProductBaseUrl}/${id}`;

    try {
        const response = await axios.get(url, { withCredentials: true });
        return response;
    } catch (error) {
        handleAxiosError(error as AxiosError);
        throw error;
    }
};
