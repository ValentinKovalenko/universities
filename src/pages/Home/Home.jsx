import { motion } from 'framer-motion';
import {homeAnimate} from "../../constans/animation";
import {textHome, wrapHome} from "./style";



const Home = () => {
    return (
        <div className={wrapHome} >
        <motion.p
            initial="initial"
            animate="animate"
            variants={homeAnimate}
            className={textHome}>
            World universities portal
        </motion.p>
        </div>
    );
};

export default Home;