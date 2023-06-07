import { motion } from 'framer-motion';
import {textContainer} from "../../constans/animation";

const Loader = ({isVisible}) => {

    return (
        <>
            {isVisible && (
                <motion.div
                    className="w-20 h-20 fixed inset-0 m-auto z-30"
                    initial="initial"
                    animate="animate"
                    variants={textContainer}
                >
                    <span className='text-white text-3xl'>Loading...</span>
                </motion.div>
            )}
        </>
    );
};

export default Loader;