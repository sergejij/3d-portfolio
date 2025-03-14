import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import Project_vertexGlsl from "three/src/renderers/shaders/ShaderChunk/project_vertex.glsl.js";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { projects } from "../constants";

function ProjectCart({
    index,
    name,
    image,
    description,
    tags,
    source_code_link,
}) {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, "0.75")}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-tertiary p-5 rounded-2xl sm:w-[350px] w-full"
            >
                <div className="relative w-full h-[230px]">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover rounded-2xl"
                    />

                    <div className="absolute inset-0 flex justify-end m-3 cart-img_cover">
                        <div
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                            onClick={() =>
                                window.open(source_code_link, "_blank")
                            }
                        >
                            <img
                                src={github}
                                alt={github}
                                className="w-1/2 h-1/2 object-contain"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px]">{name}</h3>
                    <p className="mt-2 text-secondary text-[14px]">
                        {description}
                    </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <p key={tag.name} className={`tag-[14px] ${tag.color}`}>
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    );
}
function Works() {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>My work</p>
                <p className={styles.sectionHeadText}>Projects</p>
            </motion.div>
            <div className="w-full flex">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
                >
                    I have built high-performance web applications focusing on
                    real-time collaboration and data visualization. My projects
                    include a collaborative online code editor with
                    WebSockets-based live editing and a real-time Ethereum
                    network visualization displaying blockchain activity
                    dynamically. These applications demonstrate expertise in
                    React, TypeScript, WebSockets, GraphQL, and advanced UI/UX
                    design. Each project emphasizes scalability, responsiveness,
                    and seamless user experience.
                </motion.p>
            </div>
            <div className="mt-20 flex flex-wrap gap-7">
                {projects.map((project, index) => (
                    <ProjectCart
                        key={project.name}
                        index={index}
                        {...project}
                    />
                ))}
            </div>
        </>
    );
}

export default SectionWrapper(Works, "work");
