import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

function Experience() {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>What I`ve done so far</p>
                <p className={styles.sectionHeadText}>Work Experience</p>
            </motion.div>
            <div className="mx-20 flex flex-col">
                <VerticalTimeline>
                    {experiences.map((experience) => (
                        <ExperienceCart
                            key={experience.title}
                            experience={experience}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
}

function ExperienceCart({ experience }) {
    return (
        <VerticalTimelineElement
            contentStyle={{ background: "#1d1836", color: "#fff" }}
            contentArrayStyle={{ borderRight: "7px solid #232631" }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={
                <div className="flex justify-center items-center w-full h-full">
                    <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[60%] h-[60%] object-contain"
                    />
                </div>
            }
        >
            <div>
                <h3 className="text-white text-[24px] font-bold">
                    {experience.title}
                    <p
                        className="text-secondary text-[16px] font-semibold"
                        style={{ margin: 0 }}
                    >
                        {experience.company_name}
                    </p>
                </h3>
            </div>

            <ul className="mt-5 list-disc ml-5 space-y-2">
                {experience.points.map((point) => (
                    <li
                        key={point}
                        className="text-white-100 text-[14px] pl-1 tracking-wider"
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
}

export default SectionWrapper(Experience, "work");
