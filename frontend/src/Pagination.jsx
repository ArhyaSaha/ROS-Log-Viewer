import React from 'react';
import { useContext } from 'react';
import dataContext from './context/dataContext';

const Pagination = () => {
    const { currentPage, totalPages, setCurrentPage } = useContext(dataContext);

    const getPageNumbers = () => {
        const pageNumbers = []; // Array to store page numbers
        const maxPageNumbersToShow = 5; // Maximum number of page buttons to show

        // Logic to handle a large number of pages more gracefully
        if (totalPages <= maxPageNumbersToShow) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            if (currentPage <= 3) {
                pageNumbers.push(1, 2, 3, 4, '...', totalPages);
            } else if (currentPage >= totalPages - 2) {
                pageNumbers.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                pageNumbers.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
            }
        }
        return pageNumbers
    };

    //Handle page change
    const onPageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Funtion to Render page numbers
    const renderPageNumbers = getPageNumbers().map((number, index) => {
        if (number === '...') {
            return <span key={index} className='text-white mx-1 px-2 py-1'>. . .</span>;
        } else {
            { console.log(number) }
            return (
                <button
                    id={number}
                    onClick={() => onPageChange(number)}
                    className={`mx-1 px-3 py-1 rounded ${number === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-800 text-white'}`}
                >
                    {number}
                </button>
            );
        }
    });

    return (
        <div className='flex justify-center my-5'>
            {renderPageNumbers}
        </div>
    );
};

export default Pagination;