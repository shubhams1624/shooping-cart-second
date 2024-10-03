import { useState } from 'react';

const usePagination = (data, itemsPerPage) => {
    const [currentPage, setCurrentPage] = useState(1); // Correctly set up state

    const pageCount = Math.ceil(data.length / itemsPerPage); // Calculate the total number of pages



    const nextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, pageCount)); // Move to next page
    };

    const prevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1)); // Move to previous page
    };

   

    // Return an object with the current page, page count, current items, and pagination functions
    return {
        currentPage,
        pageCount,
        nextPage,
        prevPage,
        
    };
};

export default usePagination;
