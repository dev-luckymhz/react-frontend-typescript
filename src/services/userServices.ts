import axios from "axios";

interface UserData {
    id?: number,
    username: string,
    password: string,
    email: string,
    confirmPassword?: string
}

const UserBaseUrl = "http:/localhost:8000/api/user"

const UserAxiosRequest = async (requestType = "get", body?: UserData | null, url = UserBaseUrl) => {
    axios({
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

export const RegisterUser = async (data: UserData , url: string) => {
    return UserAxiosRequest("post", data)
}

export const UpdateUser = async (body: UserData , url: string) => {
    const userId = body.id
    axios({
        method: 'put',
        url: url,
        data: body
    })
        .then(function (response) {
            return response
        }).catch(err => {
        return err
    });
}

export const DeleteUser = async (body: UserData , url: string) => {
    const userId = body.id
    axios({
        method: 'delete',
        url: url,
        data: body
    })
        .then(function (response) {
            return response
        }).catch(err => {
        return err
    });
}