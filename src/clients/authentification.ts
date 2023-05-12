import axios from "axios";

export const login = async (email: string, password: string) => {
    const res = await axios.post(`${process.env.BASE_URL}/users/login`, {
        email: email,
        password: password
    }).then(res => {
        return res.data.user;
    })
        .catch(err => {
            console.log(err);
            return null;
        });
    return res;
}