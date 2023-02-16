import axios from "axios";

interface UserData {
    id?: number,
    username: string,
    password: string,
    email: string,
    confirmPassword: string
}

export const RegisterUser = async (body: UserData , url: string) => {
        axios({
            method: 'post',
            url: url,
            data: body
        })
            .then(function (response) {
                return response
            }).catch(err => {
            return err
        });
}