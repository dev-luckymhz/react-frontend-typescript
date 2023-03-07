import {UserData, BaseUrl, AxiosRequest} from "./baseData";

export const UserRegister = async (data: UserData) => {
    const AuthBaseUrl = `${BaseUrl}/register`;
    return AxiosRequest("post", data, AuthBaseUrl)
}

