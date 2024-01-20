import React from "react";
import { IconType } from "react-icons";
import { useLocation, useNavigate } from "react-router-dom";

type SidebarItemProps = {
    label: string;
    icon: IconType;
    url: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ label, icon: Icon, url }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const isActive = location.pathname === url;

    const handleClick = () => {
        navigate(url);
    };

    return (
        <li className={`flex items-center justify-start w-full m-0 p-3 ${isActive ? "text-violet-700" : "text-neutral-700 dark:text-gray-700"}`} onClick={handleClick}>
            <span className="icon">
                <Icon />
            </span>
            <span className="label">{label}</span>
        </li>
    );
};

export default SidebarItem;
