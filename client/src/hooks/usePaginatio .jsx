import { useState } from "react";

const usePagination = (list = []) => {
    const [perPage, setPerPage] = useState(6)
    const [currentPage, setCurrentPage] = useState(1)
    const lastIndex = currentPage * perPage
    const firstIndex = lastIndex - perPage
    const showList = list.slice(firstIndex, lastIndex)
    return ({
        perPage, setPerPage, currentPage, setCurrentPage, showList
    });
};

export default usePagination;