import {Link} from "react-router-dom";
import {linkHome, linkWord, wrapHeader} from "./style";

const Header = () => {
    return (
        <div className={wrapHeader}>
            <Link className={linkHome} to='/'>
                Home
            </Link>
            <Link className={linkWord} to='/universities'>
                Word Universities
            </Link>
        </div>
    );
};

export default Header;