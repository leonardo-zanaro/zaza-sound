import React from "react";
import Navigation from "./Naviation.tsx";

type HeaderProps = {
    onSearch: (query: string) => void;
};
const Header: React.FC<HeaderProps> = ({onSearch}: HeaderProps) => {
    return (
        <div>
            <Navigation onSearch={onSearch}/>
        </div>
    );
};

export default Header;