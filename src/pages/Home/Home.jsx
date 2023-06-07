import { motion } from 'framer-motion';
import {homeAnimate} from "../../constans/animation";



const Home = () => {
    return (
        <div className='flex justify-center items-center h-screen w-full' >
        <motion.p
            initial="initial"
            animate="animate"
            variants={homeAnimate}
            className='shadow-2xl shadow-white text-7xl text-white italic'>
            World universities portal
        </motion.p>
        </div>
    );
};

export default Home;