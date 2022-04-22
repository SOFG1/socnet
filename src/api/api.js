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
    },
    login: (data)=> {
        return instance.post('auth/login',data)
    },
    logOut: ()=> {
        return instance.delete('auth/login').then(res => res.data.resultCode);
    }
}

export const usersApi = {
    getFriends: (count)=> {
        return instance.get(`users?count=${count}&friend=true`).then(res => res.data.items);
    },
    getUsers: (page, count)=> {
        return instance.get(`users?count=${count}&page=${page}`).then(res => res.data);
    }
}

export const profileApi = {
    getProfile: (id)=> {
        return instance.get(`profile/${id}`).then(res => res.data);
    },
    getStatus: (id)=> {
        return instance.get(`profile/status/${id}`).then(res => res.data);
    },
    setStatus: (status)=> {
        return instance.put(`profile/status`, {status}).then(res => res.data.resultCode)
    }
}

export const followApi = {
    followUser: (id)=> {
        return instance.post(`follow/${id}`, {}).then(res => res.data.resultCode);
    },
    unfollowUser: (id)=> {
        return instance.delete(`follow/${id}`).then(res => res.data.resultCode);
    },
    getFollowed: (id)=> {
        return instance.get(`follow/${id}`)
        .then(res => res.data)
        .catch(e => {})
    }
}