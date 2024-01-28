import React, {ChangeEvent, useState} from 'react'
import {FaVolumeHigh} from "react-icons/fa6";

interface MusicPlayerVolumeProps {
    volume: number;
    onVolumeChange: (newVolume: number) => void;
}

const MusicPlayerVolume:React.FC<MusicPlayerVolumeProps> = ({volume, onVolumeChange}: MusicPlayerVolumeProps) => {
    const [localVolume, setLocalVolume] = useState<number>(volume);
    const handleVolumeChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseInt(event.target.value, 10);
        setLocalVolume(newVolume);
        onVolumeChange(newVolume);
    };

    return (
        <div className={"px-3 flex items-center"}>
            <div
                className={"dark:text-white dark:hover:bg-gray-700 hover:bg-gray-200 p-3 rounded-full transition cursor-pointer"}>
                <FaVolumeHigh/>
            </div>
            <input
                type="range"
                min="0"
                max="100"
                value={localVolume}
                onChange={handleVolumeChange}
                className={"volume-slider"}
            />
            <small className={"text-white w-12"}>{localVolume}%</small>
        </div>
    );
}

export default MusicPlayerVolume;