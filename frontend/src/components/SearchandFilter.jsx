
import React, { useState, useContext } from 'react';
import dataContext from '../context/dataContext';
import { FaDownload } from "react-icons/fa";

const SearchandFilter = () => {

    //Importing the necessary states and functions from the context
    const { filteredLogs, logsPerPage, setLogsPerPage, parsedLogs, filterNode, setFilterNode, filterLevel, setFilterLevel, searchTerm, setSearchTerm } = useContext(dataContext);

    //Handle Search and Filter Changes
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleFilterChange = (event) => {
        setFilterLevel(event.target.value);
    };

    const handleNodeChange = (event) => {
        setFilterNode(event.target.value);
    };

    const handleLogsPerPageChange = (event) => {
        setLogsPerPage(event.target.value);
    };


    // Functions to get unique nodes and levels and populate them
    const populateNodes = () => {
        const nodes = [];
        for (let log of parsedLogs) {
            if (!nodes.includes(log.node)) {
                nodes.push(log.node);
            }
        }
        return nodes;
    };

    const populateLevels = () => {
        const levels = [];
        for (let log of parsedLogs) {
            if (!levels.includes(log.level)) {
                levels.push(log.level);
            }
        }
        return levels;
    };

    // Function to download the filtered logs as a CSV file
    const downloadCSV = () => {
        const csvRows = [];
        const headers = Object.keys(filteredLogs[0]);
        csvRows.push(headers.join(','));

        for (const log of filteredLogs) {
            const values = headers.map(header => `"${log[header]}"`);
            csvRows.push(values.join(','));
        }

        const csvString = csvRows.join('\n');
        const blob = new Blob([csvString], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.setAttribute('hidden', '');
        a.setAttribute('href', url);
        a.setAttribute('download', 'filtered_logs.csv');
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };


    return (

        <div className='flex justify-between items-center w-full max-5xl mt-10 mb-4 '>
            <input
                type='text'
                placeholder='Search logs...'
                value={searchTerm}
                onChange={handleSearchChange}
                className='bg-gray-800 text-white rounded-full py-2 px-5 w-1/2'
            />
            <div className='flex items-center justify-end gap-2'>

                <input
                    type='number'
                    placeholder='Entries per page'
                    value={logsPerPage}
                    onChange={handleLogsPerPageChange}
                    className='custom-number-input bg-gray-800 text-white rounded-full py-2 px-5 w-3/12'
                />
                <select
                    value={filterNode}
                    onChange={handleNodeChange}
                    className='bg-gray-800 text-white rounded-full py-2 px-3 text-center'
                >
                    <option value=''>All Nodes</option>
                    {populateNodes().map((node, i) =>
                        <option key={i} value={node} >{node}</option>)}
                </select>
                <select
                    value={filterLevel}
                    onChange={handleFilterChange}
                    className='bg-gray-800 text-white rounded-full py-2 px-2 text-center'
                >
                    <option value=''>All Level</option>
                    {populateLevels().map((level, i) =>
                        <option key={i} value={level}>{level}</option>)}
                </select>
                <div>
                    <button onClick={downloadCSV} className='bg-gray-800 text-white rounded-lg p-2 text-center items-center justify-self-center'><FaDownload /></button>
                </div>
            </div>
        </div>
    )
}

export default SearchandFilter