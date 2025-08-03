import React from 'react';

const Pagination = ({ totalItem, perPage, setCurrentPage, setPerPage }) => {
    const page = []
    for (let i = 1; i <= Math.ceil(totalItem / perPage); i++) {
        page.push(i)
    }
    const handleClick = (currentPage) => {
        setCurrentPage(currentPage)
    }
    return (
        <div className='flex gap-2'>
            {
                page.map((number, index) => <button key={index} onClick={() => handleClick(number)} className='btn btn-circle'>{number}</button>)
            }
            Items per page:<select onChange={(e) => setPerPage(e.target.value)} value={perPage} name="perPage" id="perPage" className=''>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </select>
        </div>
    );
};

export default Pagination;