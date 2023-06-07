import {countries} from "../../constans/countries";
import {Link, useLocation} from "react-router-dom";
import Pagination from "../../components/Pagination";
import {useEffect, useState} from "react";
import {useDebounce} from "react-use";
import startCase from 'lodash/startCase';

const WordUniversities = () => {
    const location = useLocation();
    const [totalCount, setTotalCount] = useState(countries?.length);
    const [page, setPage] = useState()
    const [country, setCountry] = useState()
    const [inputValue, setInputValue] = useState('');
    const res = countries.filter((item)=>{
         return item?.name?.includes(startCase(inputValue))
    })

    const [, cancel] = useDebounce(
        () => {
            if (inputValue){
                setCountry(res)
                setTotalCount(res?.length)
            } else {
                setTotalCount(countries?.length)
            }
        },
        1000,
        [inputValue],
    );

    useEffect(() => {
        return () => cancel();
    }, [cancel]);

    useEffect(() => {
        setPage(+location.search.replace('?page=', ''))
    }, [location.search])

    useEffect(() => {
         if (page !== 1) {
            setCountry(inputValue?.length ? res.slice((page-1) * 10, (page * 10)) : countries?.slice((page-1) * 10, (page * 10)))
        } else {
            setCountry(inputValue?.length ? res.slice(0, 10) : countries?.slice(0, 10))
        }
    }, [page, res, inputValue?.length])

    return (
        <div className='px-8'>
            <div className='flex justify-center mb-2'>
                <input className='w-1/3 h-12 rounded-3xl px-7 border-none  focus:outline-blue-400' type='text' onChange={(e)=>{setInputValue(e.target.value)}} placeholder='Enter the country'/>
            </div>
            {country?.length ? country.map((item) =>
                <div key={item.code} className='flex justify-center'>
                    <Link
                        className='bg-gray-400 m-2 px-8 flex justify-between items-center h-14 w-2/3 text-white rounded-lg focus:bg-gray-500 hover:bg-gray-500 hover:text-blue-400 bg-opacity-50'
                        to={`/universities/${item.name}`}>
                        <p className=''>{item.name}</p>
                        <p>{item.code}</p>
                    </Link>
                </div>
            ) : <p className='flex justify-center mb-3 text-xl text-white'>No countries found...</p>}
            <Pagination totalCount={totalCount}/>
        </div>
    );
};

export default WordUniversities;