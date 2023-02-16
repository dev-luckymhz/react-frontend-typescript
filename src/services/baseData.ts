import axios from "axios";
import {UserBaseUrl} from "./user.services";

export interface UserData {
    id?: number,
    username: string,
    password: string,
    email: string,
    confirmPassword?: string
}

export interface ProductData {
    id?: number,
    title: string,
    description: string,
    image: string,
    price: number
}


export const BaseUrl = "http://localhost:8000/api"

export const AxiosRequest = async (requestType = "get", body?: UserData | ProductData | null, url = UserBaseUrl) => {
    const config : { method: string, url: string, data?: UserData | ProductData | null } = {
        method: requestType,
        url: url,
    };
    (body)? config.data = body : null
    await  axios(config)
        .then(function (response) {
            return response
        }).catch(err => {
            return err
        });
}

