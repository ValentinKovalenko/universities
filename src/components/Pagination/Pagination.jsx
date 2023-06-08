import ReactPaginate from "react-paginate";
import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/20/solid";
import {
    activeLinkClassName,
    breakClassName,
    pageLinkClassName,
    styleChevronIcon,
    styleIcon,
    stylePaginate,
    wrapPaginate
} from "./style";

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
        <div className={wrapPaginate}>
            <ReactPaginate
                breakLabel="..."
                onPageChange={handlePageClick}
                marginPagesDisplayed={3}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                className={stylePaginate}
                pageLinkClassName={pageLinkClassName}
                activeLinkClassName={activeLinkClassName}
                breakClassName={breakClassName}
                nextLabel={
                    <span className={styleIcon}>
          <ChevronRightIcon className={styleChevronIcon} />
        </span>
                }
                previousLabel={
                    <span className={styleIcon}>
          <ChevronLeftIcon className={styleChevronIcon} />
        </span>
                }
                renderOnZeroPageCount={null}
            />
        </div>
    );
};

export default Pagination;