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
export const AxiosRequest = async (requestType = "get", body?: UserData | ProductData | null, url = UserBaseUrl) => {
    await  axios({
        method: requestType,
        url: url,
        data: body
    })
        .then(function (response) {
            return response
        }).catch(err => {
            return err
        });
}

export const BaseUrl = "http://localhost:8000/api"