import React from 'react'
import { useState, useContext } from 'react';
import { uploadFile } from '../services/api';
import dataContext from '../context/dataContext';

const Upload = () => {
    // Importing the necessary context
    const { setParsedLogs, isUploaded, setIsUploaded } = useContext(dataContext);

    const [error, setError] = useState(null);
    const [file, setFile] = useState(null);

    // Handle file uploading
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) {
            setError("No file selected");
            return;
        }

        try {
            const formData = new FormData();
            formData.append("file", file);

            const response = await uploadFile(formData);

            if (response.parsed_logs) {
                setParsedLogs(response.parsed_logs);
                setError(null);
            } else {
                setError("Failed to parse logs");
            }

            setIsUploaded(true);
        } catch (err) {
            setError(err.message);
        }
    };


    return (
        <div className='mt-16 flex justify-center text-white items-center w-full'>
            <header className='flex flex-col w-full mb-5 max-w-xl justify-between items-center p-4 bg-gray-800 rounded-lg shadow-md'>
                <div>
                    <h3 className='text-white mb-5 font-semibold'>{(isUploaded) ? 'Change file : ' : 'Upload file : '}</h3>
                    <div>
                        <input type="file" onChange={handleFileChange} className='bg-gray-700 text-white text-center rounded-lg p-2' />
                        <button onClick={handleUpload} className='bg-blue-500 text-white rounded-lg p-2 ml-2'>{(isUploaded) ? 'Change' : 'Upload'}</button>
                    </div>

                </div>

                {error && <p className="text-red-500 mt-2">{error}</p>}

            </header>
        </div>
    )
}

export default Upload