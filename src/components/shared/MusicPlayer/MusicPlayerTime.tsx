import React from 'react'

interface MusicPlayerTimeProps {
    currentTime: string,
    duration: string
}

const MusicPlayerTime:React.FC<MusicPlayerTimeProps> = ({currentTime, duration}: MusicPlayerTimeProps) => {
    return (
        <small className={'text-white'}>{currentTime} / {duration}</small>
    );
}

export default MusicPlayerTime;