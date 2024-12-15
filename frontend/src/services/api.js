// services/api.js

import axios from 'axios';



// Base URL for the Flask backend
const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'; // Adjust according to your backend URL

/**
 * Uploads a log file to the Flask backend.
 * @param {FormData} fileData - The file data to be uploaded.
 * @returns {Promise} - A Promise that resolves to the response data.
 */
export const uploadFile = async (fileData) => {
    try {
        const response = await axios.post(`${BASE_URL}/upload`, fileData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response ? error.response.data.error : 'An error occurred while uploading the file');
    }
};
