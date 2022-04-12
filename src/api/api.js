const axios = require('axios').default;

let instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "7f7be2c7-a321-4d55-8c0f-a75eec01f0b5"
    }
});

export const authApi = {
    auth: ()=> {
        return instance.get('auth/me').then(res => res.data);
    }
}

export const usersApi = {
    getFriends: (count)=> {
        return instance.get(`users?count=${count}&friend=true`).then(res => res.data.items);
    }
}