import axios from "axios";

export interface UserData {
    id?: number,
    username: string,
    password: string,
    email?: string,
    confirmPassword?: string
};

export interface ProductData {
    id?: number,
    title: string,
    description: string,
    image: string,
    price: number
};
type tCredential = {withCredentials: boolean}

type axiosDataModel = UserData | ProductData | null;

export const BaseUrl = ""

export const AxiosRequest = async (requestType = "get", body?: axiosDataModel, url = BaseUrl, credential = false ) => {
    const config : { method: string, url: string, data?: axiosDataModel, withCredentials?: boolean } = {
        method: requestType,
        url: url,
        withCredentials: (credential)
    };
    if(body) config.data = body;
    await  axios(config)
        .then(function (response) {
            return response
        }).catch(err => {
            return err
        });
}

