import {useGetUniversitiesQuery} from "../../store/universities/universitiesSlice";
import {useLocation} from "react-router-dom";
import {EyeIcon} from "@heroicons/react/20/solid";
import Loader from "../../components/Loader";

const Universities = () => {
    const location = useLocation();
    const county = location.pathname.replace('/universities/', '')

    const {data, isFetching, isLoading,} = useGetUniversitiesQuery({name: county});
    const isVisible = isLoading || isFetching

    return (
        <>
            <Loader isVisible={isVisible} />
            <p className='flex justify-center mb-3 text-2xl text-white'>Universities {county.replaceAll('%20',' ')}</p>
            {data?.length ? data.map((item, index) =>
                <div className='flex justify-center' key={index}>
                    <div
                        className='flex rounded-lg bg-gray-400 bg-opacity-50 items-center justify-between w-2/3 h-14 mx-6 px-8 mt-2 text-white'>
                        <span>{item?.name}</span>
                        <span className='flex'>Look over <a className='flex ml-6' href={item.web_pages[0]}><EyeIcon
                            class="ml-3 h-6 w-6 text-gray-700 hover:text-gray-900"/></a></span>
                    </div>
                </div>) : <p className='flex justify-center mb-3 text-xl text-white'>There are no universities in this country...</p>}
        </>
    );
};

export default Universities;