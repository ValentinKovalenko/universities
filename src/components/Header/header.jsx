import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className='flex ml-10 items-center h-14'>
            <Link className='text-white mr-3 hover:text-blue-400 focus:text-blue-400' to='/'>
                Home
            </Link>
            <Link className='text-white hover:text-blue-400 focus:text-blue-400' to='/universities'>
                Word Universities
            </Link>
        </div>
    );
};

export default Header;