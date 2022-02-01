import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://aunorfest.com',
});


export default axiosInstance;