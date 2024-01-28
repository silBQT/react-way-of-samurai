import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { "API-KEY": "76f7d314-f8ba-46bc-b3fc-b87b95f81732" }
})

export const usersAPI = {
    requestUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        })
    },
    follow(userId) {
        return instance.post(`follow/${userId}`).then(response => {
            return response.data;
        })
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => {
            return response.data;
        })
    }
}

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => {
            return response.data;
        })
    },
    getUserStatus(userId) {
        return instance.get(`profile/status/${userId}`).then(response => {
            return response.data;
        })
    },
    updateUserStatus(status) {
        return instance.put(`profile/status`, { status: status }).then(response => {
            return response.data;
        })
    },
    saveImage(image) {
        const formData = new FormData();
        formData.append("image", image);

        return instance.put(`profile/photo`, { image: image }, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            return response.data;
        })
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`).then(response => {
            return response.data;
        })
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe }).then(response => {
            return response.data
        })
    },
    logout() {
        return instance.delete(`auth/login`).then(response => {
            return response.data
        })
    }
}