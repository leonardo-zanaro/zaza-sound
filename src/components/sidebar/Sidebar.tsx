import React from "react";
import SidebarItem from "./SidebarItem.tsx";
import {FaHeart, FaHome} from "react-icons/fa";

type SidebarProps = {

}

const Sidebar: React.FC<SidebarProps> = () => {
    const sidebarItems= [
        {id: 1, label: 'Dashboard', icon: FaHome, url: '/' },
        {id: 2, label: 'Favoritos', icon: FaHeart, url: '/favorites'}
    ]

    return (
        <div className="w-1/6 p-6 h-screen">
            <ul className={'m-0'}>
                {sidebarItems.map(item => (
                    <SidebarItem key={item.id} label={item.label} icon={item.icon} url={item.url} />
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;