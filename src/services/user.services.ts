import {UserData, BaseUrl, AxiosRequest} from "./baseData";


export const UserBaseUrl = `${BaseUrl}/users`


export const RegisterUser = async (data: UserData) => {
    return AxiosRequest("post", data, UserBaseUrl)
}

export const UpdateUser = async (data: UserData) => {
    const userId = data.id
    const url = `${UserBaseUrl}/${userId}`
    return AxiosRequest("put", data, url)
}

export const DeleteUser = async (data: UserData) => {
    const userId = data.id
    const url = `${UserBaseUrl}/${userId}`
    return AxiosRequest("delete", data, url)
}

export const GetUsers = async () => {
    return AxiosRequest("get", null, UserBaseUrl)
}

export const GetOneUser = async (id: number) => {
    const url = `${UserBaseUrl}/${id}`
    return AxiosRequest("get", null, url)
}