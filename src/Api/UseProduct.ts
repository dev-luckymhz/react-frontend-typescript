import { useState, useEffect } from "react";
import axios from "axios";
import {ProductData} from "../services/baseData";

/**
 * Custom hook for managing product data.
 * Fetches product data from the API and provides it to the component.
 * @returns An object containing the products and a function to fetch products.
 */
const useProduct = () => {
    const [products, setProducts] = useState<ProductData[]>([]);

    /**
     * Fetches the product data from the API and updates the products state.
     * @throws Error if an error occurs during the API request.
     */
    const fetchProducts = async () => {
        try {
            const response = await axios.get("/product");
            setProducts(response.data);
        } catch (error) {
            throw error;
        }
    };

    // Fetch products when the component mounts
    useEffect(() => {
        const fetchData = async () => {
            try {
                await fetchProducts();
            } catch (error) {
                // Throw the error
                throw error;
            }
        };

        fetchData();
    }, []);

    return { products, fetchProducts };
};

export default useProduct;
