import ReactPaginate from "react-paginate";
import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/20/solid";

const Pagination = ({totalCount}) => {
    let [searchParams, setSearchParams] = useSearchParams();
    const [pages, setPages] = useState('1')

    const pageCount = Math.ceil(totalCount / 10);
    const handlePageClick = (e) => {
        setPages(e.selected + 1)
    }

 useEffect(()=>{
     setSearchParams(params => {
         params.set("page", pages || 1)
         return params;
     })
 },[pages, setSearchParams])

    return (
        <div className='flex justify-center'>
            <ReactPaginate
                breakLabel="..."
                onPageChange={handlePageClick}
                marginPagesDisplayed={3}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                className="relative flex rounded-md text-gray py-4"
                pageLinkClassName="border-gray-300 relative inline-flex items-center h-[38px] px-4 py-2 border text-base font-medium hover:bg-gray-100 focus:bg-gray-100"
                activeLinkClassName="bg-secondary-100 border-secondary-400 text-secondary border-secondary"
                breakClassName="border-gray-300 relative inline-flex items-center px-4 border text-base font-medium"
                nextLabel={
                    <span className='relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-base font-medium hover:bg-gray-100'>
          <ChevronRightIcon className="h-5 w-5" />
        </span>
                }
                previousLabel={
                    <span className='relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-base font-medium hover:bg-gray-100'>
          <ChevronLeftIcon className="h-5 w-5" />
        </span>
                }
                renderOnZeroPageCount={null}
            />
        </div>
    );
};

export default Pagination;