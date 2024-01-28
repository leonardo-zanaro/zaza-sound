import React from "react";
import SidebarItem from "./SidebarItem.tsx";
import {FaCompass, FaHeart, FaHome} from "react-icons/fa";

type SidebarProps = {

}

const Sidebar: React.FC<SidebarProps> = () => {
    const sidebarItems= [
        {id: 1, label: 'Explorar', icon: FaCompass, url: '/' },
        {id: 2, label: 'Favoritos', icon: FaHeart, url: '/favorites'}
    ]

    return (
        <div className="invisible md:w-1/6 md:p-6 md:visible h-screen w-0 p-0">
            <h2 className={'font-black font-sans dark:text-violet-700 text-neutral-700'}>Zaza Sound</h2>
            <ul className={'m-0'}>
                {sidebarItems.map(item => (
                    <SidebarItem key={item.id} label={item.label} icon={item.icon} url={item.url} />
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;