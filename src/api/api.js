import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { "API-KEY": "f3c011b4-54bd-4d5f-a293-6e99fc0327d9" }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        })
    }
}

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => {
            return response.data;
        })
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`).then(response => {
            return response.data;
        })
    }
}