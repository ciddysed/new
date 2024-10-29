// src/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080', // Set your base URL here
    timeout: 10000, // Optional: Set a timeout for requests
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
