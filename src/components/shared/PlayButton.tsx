import React from "react";
import {BiPlay} from "react-icons/bi";
type PlayButtonProps = {
    visible: boolean
}


const PlayButton: React.FC<PlayButtonProps> = (props: PlayButtonProps) => {
    return (
        <div
            className={`bg-violet-700 text-white p-3 rounded-full w-12 h-12 flex justify-center items-center absolute right-5 border-gray-200 dark:border-gray-900 border-4 -bottom-4 transition-all duration-300 opacity-${props.visible ? '100' : '0'} cursor-pointer`}>
            <BiPlay />
        </div>
    );
};

export default PlayButton;