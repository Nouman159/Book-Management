import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://192.168.10.27:5000/books-api",
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        if (config.data instanceof FormData) {
            config.headers['Content-Type'] = 'multiple/form-data';

        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        if (error.response && error.response.status === 401) {

        }
        return Promise.reject(error);
    }
)

export default axiosInstance