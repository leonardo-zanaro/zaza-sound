import React from "react";
import Copyright from "./Copyright.tsx";

const Footer: React.FC = () => {
    return (
        <div className={'flex justify-center p-6'}>
            <Copyright />
        </div>
    );
};

export default Footer;