import axios from "axios";

/**
 * Interface for user data.
 */
export interface UserData {
    /**
     * The ID of the user (optional).
     */
    id?: number;
    /**
     * The username of the user.
     */
    username: string;
    /**
     * The password of the user.
     */
    password: string;
    /**
     * The email of the user (optional).
     */
    email?: string;
    /**
     * The confirmation password of the user (optional).
     */
    confirmPassword?: string;
}


/**
 * Interface for product data.
 */
export interface ProductData {
    /**
     * The ID of the product (optional).
     */
    id?: number;
    /**
     * The title of the product.
     */
    title: string;
    /**
     * The description of the product.
     */
    description: string;
    /**
     * The image URL of the product.
     */
    image: string;
    /**
     * The price of the product.
     */
    price: number;
}

export const BaseUrl = ""




