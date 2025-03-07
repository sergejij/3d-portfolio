import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles.js";
import { staggerContainer } from "../utils/motion.js";

function SectionWrapper(Component, id) {
    return function HOC() {
        return (
            <motion.section
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.padding} w-max-7xl mx-auto relative z-0`}
            >
                <span className="hash-span" id={id}>
                    &nbsp;
                </span>
                <Component />
            </motion.section>
        );
    };
}

export default SectionWrapper;
