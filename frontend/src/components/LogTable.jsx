import React from 'react'
import { useContext } from 'react'
import dataContext from '../context/dataContext'

const LogTable = () => {

    // Importing the necessary state from the context
    const { currentLogs } = useContext(dataContext);

    //Color for label
    const getLevelColor = (level) => {
        switch (level) {
            case 'FATAL':
                return 'bg-red-600';
            case 'WARN':
                return 'bg-yellow-500';
            case 'INFO':
                return 'bg-blue-500';
            case 'DEBUG':
                return 'bg-green-500';
            case 'ERROR':
                return 'bg-purple-600';
            default:
                return '';
        }
    }

    return (
        <>
            {currentLogs.length > 0 && (
                <table className='table-auto mt-8 w-full text-white'>
                    <thead>
                        <tr>
                            <th className='px-4 text-nowrap py-2'>S. No.</th>
                            <th className='px-4 py-2'>Date</th>
                            <th className='px-4 py-2'>Time</th>
                            <th className='px-4 py-2'>Level</th>
                            <th className='px-4 py-2'>Node</th>
                            <th className='px-4 py-2'>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentLogs.map((log, index) => (
                            <tr key={index} className='bg-gray-800'>
                                <td className='border px-4 py-2'>{index + 1}</td>
                                <td className='border px-4 py-2'>{log.date}</td>
                                <td className='border px-4 py-2'>{log.time}</td>
                                <td className='border px-4 py-3'><span className={` rounded-lg ${getLevelColor(log.level)} px-2 py-1 w-16`}>{log.level}</span></td>
                                <td className='border px-2 text-nowrap py-2'>{log.node}</td>
                                <td className='border px-4 text-nowrap py-2'>{log.message}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    )
}

export default LogTable