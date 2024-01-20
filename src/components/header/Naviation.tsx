import DarkMode from "./DarkMode.tsx";
import React from "react";
import InputType from "../shared/Search.tsx";

const Navigation: React.FC = () => {
    return(
        <nav className={'flex justify-between items-center px-6 mt-3'}>
            <div>
                <InputType />
            </div>
            <ul className={'list-none'}>
                <li><DarkMode /></li>
            </ul>
        </nav>
    );
};

export default Navigation;