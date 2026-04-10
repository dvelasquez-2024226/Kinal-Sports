import axios from '../utils/axios.js'

//Configuracion de Axios para cada servidor
const axiosAuth = axios.create({
    baseURL: import.meta.env.VITE_AUTH_URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/jason'
    }
})

const axiosAdmin = axios.create({
    baseURL: import.meta.env.VITE_ADMIN_URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/jason'
    }
})

export { axiosAuth, axiosAdmin }