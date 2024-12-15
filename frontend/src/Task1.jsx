import React, { useState, useContext } from 'react';
import { uploadFile } from './services/api'; // Ensure the API call logic is in the correct location
import Pagination from './Pagination';
import Upload from './components/Upload';
import dataContext from './context/dataContext';
import SearchandFilter from './components/SearchandFilter';
import LogTable from './components/LogTable';

const Task1 = () => {
    // Importing the necessary state from the context
    const { currentLogs } = useContext(dataContext);


    return (
        <>
            <Upload></Upload>
            <div className='w-full max-w-5xl mx-auto mt-4'>
                <SearchandFilter />
                {currentLogs.length < 1 && (
                    <div>
                        <h2 className='text-white text-lg font-semibold mt-32 pb-3'>No Logs to parse.</h2>
                        <p className='text-white '>Please try uploading a .log or.txt file to parse</p>
                    </div>

                )}
                <LogTable />
                <Pagination />
            </div >
        </>
    )
}

export default Task1