import DarkMode from "./DarkMode.tsx";
import React from "react";
import Search from "../shared/Search.tsx";

type NavigationProps = {
    onSearch: (query: string) => void;
};

const Navigation: React.FC<NavigationProps> = ({ onSearch }: NavigationProps) => {
    return(
        <nav className={'flex justify-between items-center px-6 mt-3'}>
            <div>
                <Search onSearch={onSearch}/>
            </div>
            <ul className={'list-none flex items-center'}>
                <li><DarkMode /></li>
                <li className={'dark:bg-white px-4 py-1 rounded-3xl shadow-xl hover:text-violet-700 cursor-pointer'}>Iniciar Sessão</li>
            </ul>
        </nav>
    );
};

export default Navigation;