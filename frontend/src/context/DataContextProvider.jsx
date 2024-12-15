import React, { createContext, useState } from 'react';
import dataContext from './dataContext';


export const DataContextProvider = ({ children }) => {
    const [parsedLogs, setParsedLogs] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterLevel, setFilterLevel] = useState('');
    const [filterNode, setFilterNode] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [logsPerPage, setLogsPerPage] = useState(10);
    const [isUploaded, setIsUploaded] = useState(false);

    // Calculate the current logs to display
    const indexOfLastLog = currentPage * logsPerPage;
    const indexOfFirstLog = indexOfLastLog - logsPerPage;

    // Filter the logs based on the search term, level, and node
    const filteredLogs = parsedLogs.filter(log =>
        log.message.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filterLevel ? log.level === filterLevel : true) && (filterNode ? log.node === filterNode : true)
    );
    // Get the current logs to display
    const currentLogs = filteredLogs.slice(indexOfFirstLog, indexOfLastLog);
    const totalPages = Math.ceil(filteredLogs.length / logsPerPage);


    return (
        <dataContext.Provider value={{
            isUploaded,
            setIsUploaded,
            parsedLogs,
            setParsedLogs,
            filterNode,
            setFilterNode,
            filterLevel,
            setFilterLevel,
            searchTerm,
            setSearchTerm,
            currentPage,
            setCurrentPage,
            currentLogs,
            totalPages,
            filteredLogs,
            logsPerPage,
            setLogsPerPage
        }}>
            {children}
        </dataContext.Provider>
    );
};

export default DataContextProvider;