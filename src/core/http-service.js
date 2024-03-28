import axios from "axios"
import { useNavigate } from "react-router-dom"

const BASE_URL = "https://react-mini-projects-api.classbon.com"

export const httpService = axios.create({
    baseURL: BASE_URL
})

export const httpInterceptedService = axios.create({
    baseURL: BASE_URL
})
    ;

httpInterceptedService.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem("token")
        if (token) {
            config.headers = {
                authorization: `Bearer ${token}`
            }
        }
        return config
    },

    (error) => Promise.reject(error)
)

// to redirect user to login page when the token is expired
httpInterceptedService.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response.status === 401) {
            window.location.href = "/login"
        }
        return Promise.reject(error);
    }
)
