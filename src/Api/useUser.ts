import { useState } from "react";
import { UserData } from "../services/baseData";
import {
    DeleteUser,
    GetOneUser,
    RegisterUser,
    UpdateUser,
    GetUsers,
} from "../services/user.services";

/**
 * Custom hook for managing user-related functionality.
 * Includes functions for fetching, creating, updating, and deleting users.
 * @returns Object containing user data and functions for user management.
 */
export default function useUser() {
    const [user, setUser] = useState<UserData | null>(null);
    const [users, setUsers] = useState<UserData[]>([]);

    /**
     * Fetches the user data from the server and updates the state.
     * @throws Error if an error occurs during the request.
     */
    const fetchUser = async () => {
        try {
            const response = await GetOneUser(user?.id || 0);
            setUser(response.data);
        } catch (error) {
            throw error;
        }
    };

    /**
     * Fetches all users from the server and updates the state.
     * @throws Error if an error occurs during the request.
     */
    const fetchAllUsers = async () => {
        try {
            const response = await GetUsers();
            setUsers(response.data);
        } catch (error) {
            throw error;
        }
    };

    /**
     * Creates a new user using the provided user data and updates the state with the newly created user.
     * @param userData - The user data for creating a new user.
     * @throws Error if the creation fails or an error occurs during the request.
     */
    const createUser = async (userData: UserData) => {
        try {
            const response = await RegisterUser(userData);
            setUser(response.data);
        } catch (error) {
            throw error;
        }
    };

    /**
     * Updates an existing user with the provided user data and updates the state with the updated user.
     * @param userData - The user data for updating an existing user.
     * @throws Error if the update fails or an error occurs during the request.
     */
    const updateUser = async (userData: UserData) => {
        try {
            const response = await UpdateUser(userData);
            setUser(response.data);
        } catch (error) {
            throw error;
        }
    };

    /**
     * Deletes a user with the specified user ID and sets the state to `null`.
     * @param userId - The ID of the user to delete.
     * @throws Error if the deletion fails or an error occurs during the request.
     */
    const deleteUser = async (userId: number) => {
        const data: UserData = {
            id: userId,
            username: "",
            password: "",
        };
        try {
            await DeleteUser(data);
            setUser(null);
        } catch (error) {
            throw error;
        }
    };

    return {
        user,
        users,
        fetchUser,
        fetchAllUsers,
        createUser,
        updateUser,
        deleteUser,
    };
}
