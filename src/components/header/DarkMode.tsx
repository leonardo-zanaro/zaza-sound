import React, {useEffect, useState} from "react";
import {FaMoon, FaSun} from "react-icons/fa";

type DarkModeProps = { }

const DarkMode: React.FC<DarkModeProps> = () => {
const [theme, setTheme] = useState<string>();

useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme("dark");
    }
    else {
        setTheme("light");
    }
}, []);

useEffect(() => {
    if(theme === "dark")
    {
        document.documentElement.classList.add("dark");
    }
    else
    {
        document.documentElement.classList.remove("dark");
    }
}, [theme]);

const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
}
    return (
        <div onClick={handleThemeSwitch}>
            <span className="icon">
                <FaMoon className={'dark:hidden text-neutral-700'}/>
                <FaSun  className={'hidden dark:block text-gray-700'}/>
            </span>
        </div>
    );
};

export default DarkMode;