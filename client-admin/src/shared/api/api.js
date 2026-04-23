import axios from '../utils/axios.js'
import { useAuthStore } from '../../features/auth/store/authStore.js'

// Configuaración de Axios para cada servidor (admin y auth)
const axiosAuth =  axios.create({
    baseURL: import.meta.env.VITE_AUTH_URL,
    timeout: 5000,
    headers:{
        'Content-Type': 'application/json'
    }
})

const axiosAdmin =  axios.create({
    baseURL: import.meta.env.VITE_ADMIN_URL,
    timeout: 5000,
    headers:{
        'Content-Type': 'application/json'
    }
})

// Configuración de interceptores para manejar token y headers

axiosAdmin.interceptors.request.use((config) => {
    config._axiosClient = 'admin';
    const token = useAuthStore.getState().token;
    if (token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
})

export {axiosAdmin, axiosAuth}