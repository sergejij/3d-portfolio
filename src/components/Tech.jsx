import React from "react";

import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";

function Tech() {
    return (
        <div className="flex flex-row flex-wrap justify-center gap-10">
            {technologies.map((technology) => (
                <div key={technology.name} className="h-28 w-28">
                    <BallCanvas icon={technology.icon} />
                </div>
            ))}
        </div>
    );
}

export default SectionWrapper(Tech, "");
