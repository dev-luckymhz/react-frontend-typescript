import {UserData, BaseUrl, AxiosRequest} from "./baseData";

export const Login = async (data: UserData) => {
    const AuthBaseUrl = `${BaseUrl}/login`
    return AxiosRequest("post", data, AuthBaseUrl)
}

export const Register = async (data: UserData) => {
    const AuthBaseUrl = `${BaseUrl}/register`
    return AxiosRequest("post", data, AuthBaseUrl)
}