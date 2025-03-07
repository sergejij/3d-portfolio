import React, { useState } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line import/extensions
import { styles } from "../styles.js";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

function Navbar() {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    return (
        <nav
            className={`${styles.paddingX} w-full items-center py-5 fixed top-0 z-20 bg-primary`}
        >
            <div className="w-full flex justify-between items-center max-w7xl mx-auto">
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive("");
                        window.scroll(0, 0);
                    }}
                >
                    <img
                        src={logo}
                        alt="logo"
                        className="w-12 h-12 object-contain"
                    />
                    <p className="text-white text-[18px] font-bold cursor-pointer">
                        Sergey Ushakov
                    </p>
                </Link>
                <ul className="list-none hidden sm:flex flex-row gap-10">
                    {navLinks.map((link) => (
                        <li
                            key={link.title}
                            className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(link.title)}
                        >
                            <Link to={`#${link.id}`}>{link.title}</Link>
                        </li>
                    ))}
                </ul>

                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img
                        src={toggle ? close : menu}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain cursor-pointer"
                        onClick={() => setToggle((prev) => !prev)}
                    />
                    <div
                        className={`${toggle ? "flex" : "hidden"} p-6 black-gradient top-20 absolute right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                    >
                        <ul className="list-none flex justify-end items-start flex-col gap-4">
                            {navLinks.map((link) => (
                                // eslint-disable-next-line jsx-a11y/click-events-have-key-events
                                <li
                                    key={link.title}
                                    className="font-poppins font-medium cursor-pointer text-[16px]"
                                    onClick={() => {
                                        setActive(link.title);
                                        setToggle((prev) => !prev);
                                    }}
                                >
                                    <Link to={`#${link.id}`}>{link.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
