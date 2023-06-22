import { useState } from "react";
import { ProductData } from "../services/baseData";
import {
    DeleteProduct,
    GetOneProduct,
    RegisterProduct,
    UpdateProduct,
    GetProducts,
} from "../services/product.services";

/**
 * Custom hook for managing product-related functionality.
 * Includes functions for fetching, creating, updating, and deleting products.
 * @returns Object containing product data and functions for product management.
 */
export default function useProduct() {
    const [product, setProduct] = useState<ProductData | null>(null);
    const [products, setProducts] = useState<ProductData[]>([]);

    /**
     * Fetches a product with the specified product ID from the server and updates the state.
     * @param productId - The ID of the product to fetch.
     * @throws Error if an error occurs during the request.
     */
    const fetchProduct = async (productId: number) => {
        try {
            const response = await GetOneProduct(productId);
            setProduct(response.data);
        } catch (error) {
            throw error;
        }
    };

    /**
     * Fetches all products from the server and updates the state.
     * @throws Error if an error occurs during the request.
     */
    const fetchAllProducts = async () => {
        try {
            const response = await GetProducts();
            setProducts(response.data);
        } catch (error) {
            throw error;
        }
    };

    /**
     * Creates a new product using the provided product data and updates the state with the newly created product.
     * @param productData - The product data for creating a new product.
     * @throws Error if the creation fails or an error occurs during the request.
     */
    const createProduct = async (productData: ProductData) => {
        try {
            const response = await RegisterProduct(productData);
            setProduct(response.data);
        } catch (error) {
            throw error;
        }
    };

    /**
     * Updates an existing product with the provided product data and updates the state with the updated product.
     * @param productData - The product data for updating an existing product.
     * @throws Error if the update fails or an error occurs during the request.
     */
    const updateProduct = async (productData: ProductData) => {
        try {
            const response = await UpdateProduct(productData);
            setProduct(response.data);
        } catch (error) {
            throw error;
        }
    };

    /**
     * Deletes a product with the specified product ID and removes it from the state.
     * @param productId - The ID of the product to delete.
     * @throws Error if the deletion fails or an error occurs during the request.
     */
    const deleteProduct = async (productId: number) => {
        const data: ProductData = {
            id: productId,
            name: "",
            price: 0,
            description: "",
        };
        try {
            await DeleteProduct(data);
            setProduct(null);
        } catch (error) {
            throw error;
        }
    };

    return {
        product,
        products,
        fetchProduct,
        fetchAllProducts,
        createProduct,
        updateProduct,
        deleteProduct,
    };
}
