import React, {ButtonHTMLAttributes, ElementType} from 'react'
import {twMerge} from "tailwind-merge";
import MusicProps from "../../../types/MusicProps.ts";

interface MusicPlayerContentProps {
    music: MusicProps | null;
}

const MusicPlayerContent:React.FC<MusicPlayerContentProps> = ({music}: MusicPlayerContentProps) => {
    return (
        <div className={'flex gap-2'}>
            {music !== null ?
                <div className={'flex'}>
                    <img src={music.image}  alt={music.title} className={'max-h-14 max-w-14'}/>
                    <div className={'text-neutral-700 dark:text-white'}>
                        <h6>{music.title}</h6>
                        <small>{music.author}</small>
                    </div>
                </div> : <></>}
        </div>
    );
}

export default MusicPlayerContent;