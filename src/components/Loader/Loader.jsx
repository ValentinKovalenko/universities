import { motion } from 'framer-motion';
import {textContainer} from "../../constans/animation";
import {animationLoader, textLoader} from "./style";

const Loader = ({isVisible}) => {

    return (
        <>
            {isVisible && (
                <motion.div
                    className={animationLoader}
                    initial="initial"
                    animate="animate"
                    variants={textContainer}
                >
                    <span className={textLoader}>Loading...</span>
                </motion.div>
            )}
        </>
    );
};

export default Loader;