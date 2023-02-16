import axios from "axios";

interface UserData {
    id?: number,
    username: string,
    password: string,
    email: string,
    confirmPassword?: string
}

const UserBaseUrl = "http://localhost:8000/api/users"

const UserAxiosRequest = async (requestType = "get", body?: UserData | null, url = UserBaseUrl) => {
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

export const RegisterUser = async (data: UserData) => {
    return UserAxiosRequest("post", data)
}

export const UpdateUser = async (data: UserData) => {
    const userId = data.id
    const url = `${UserBaseUrl}/${userId}`
    return UserAxiosRequest("put", data, url)
}

export const DeleteUser = async (data: UserData) => {
    const userId = data.id
    const url = `${UserBaseUrl}/${userId}`
    return UserAxiosRequest("delete", data, url)
}

export const GetUsers = async () => {
    return UserAxiosRequest("get")
}

export const GetOneUser = async (id: number) => {
    const url = `${UserBaseUrl}/${id}`
    return UserAxiosRequest("get", null, url)
}