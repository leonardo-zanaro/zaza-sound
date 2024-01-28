import React, {ButtonHTMLAttributes, ElementType} from 'react'
import {twMerge} from "tailwind-merge";

interface MusicPlayerActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: ElementType;
}

const MusicPlayerAction:React.FC<MusicPlayerActionProps> = ({icon: Icon, ...rest}: MusicPlayerActionProps) => {
    return (
        <button {...rest} className={twMerge('rounded-full flex items-center justify-center m-0 bg-transparent dark:hover:bg-gray-700 hover:outline-0 hover:shadow-transparent', rest.className)}>
            <Icon className={'w-3 h-3 text-neutral-700 dark:text-white'}/>
        </button>
    );
}

export default MusicPlayerAction;