import {useGetUniversitiesQuery} from "../../store/universities/universitiesSlice";
import {useLocation} from "react-router-dom";
import {EyeIcon} from "@heroicons/react/20/solid";
import Loader from "../../components/Loader";
import {styleContent, styleEyeIcon, styleText, styleTitle, styleWrap} from "./style";

const Universities = () => {
    const location = useLocation();
    const county = location.pathname.replace('/universities/', '')

    const {data, isFetching, isLoading,} = useGetUniversitiesQuery({name: county});
    const isVisible = isLoading || isFetching

    return (
        <>
            <Loader isVisible={isVisible} />
            <p className={styleTitle}>Universities {county.replaceAll('%20',' ')}</p>
            {data?.length ? data.map((item, index) =>
                <div className={styleWrap} key={index}>
                    <div
                        className={styleContent}>
                        <span>{item?.name}</span>
                        <span className='flex'>Look over <a className='flex ml-6' href={item.web_pages[0]}><EyeIcon
                            class={styleEyeIcon}/></a></span>
                    </div>
                </div>) : <p className={styleText}>There are no universities in this country...</p>}
        </>
    );
};

export default Universities;