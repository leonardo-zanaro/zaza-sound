import DarkMode from "./DarkMode.tsx";
import React from "react";
import {FaBars} from "react-icons/fa";

const Navigation: React.FC = () => {
    return(
        <nav className={'flex justify-between items-center px-6'}>
            <span className={'text-neutral-700 dark:text-gray-700'}>
                <FaBars />
            </span>
            <ul className={'list-none'}>
                <li><DarkMode /></li>
            </ul>
        </nav>
    );
};

export default Navigation;