import React, { useState, ChangeEvent } from 'react';
import { FaVolumeHigh } from 'react-icons/fa6';

const VolumeControl: React.FC = () => {
    const [volume, setVolume] = useState<number>(50);

    const handleVolumeChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseInt(event.target.value, 10);
        setVolume(newVolume);
    };

    return (
        <div className={'px-3 flex items-center'}>
            <div className={'dark:hover:bg-gray-950 hover:bg-gray-200 p-3 rounded-full transition cursor-pointer'}>
                <FaVolumeHigh />
            </div>
            <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={handleVolumeChange}
                className={'volume-slider'}
            />
            <div>{volume}%</div>
        </div>
    );
};

export default VolumeControl;
