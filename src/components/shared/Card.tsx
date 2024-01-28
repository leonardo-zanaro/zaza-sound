import React, { useState } from "react";
import MusicProps from "../../types/MusicProps.ts";
import PlayButton from "./PlayButton.tsx";
import FavoriteButton from "./FavoriteButton.tsx";
import { useMusicContext } from "../../contexts/MusicContext.tsx";

type CardProps = {
    music: MusicProps;
};

const Card: React.FC<CardProps> = ({ music }: CardProps) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const { setMusic } = useMusicContext();
    const { selectedMusic, setMusic: setPlayerMusic } = useMusicContext();

    const handlePlayClick = () => {

        if (selectedMusic && selectedMusic.id === music.id) {
            setPlayerMusic(null);
        } else {
            setMusic(music);
        }
    };

    return (
        <div
            className={'p-4 w-full h-full bg-gray-200 dark:bg-gray-900 rounded-xl'}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={'flex flex-col h-full'}>
                <div className={'relative flex h-5/6 w-full gap-0'}>
                    <FavoriteButton visible={isHovered} id={music.id} />
                    <img
                        src={music.image}
                        alt={music.title}
                        className={'rounded-lg w-full'}
                    />
                    <div onClick={handlePlayClick}>
                        <PlayButton visible={isHovered} />
                    </div>
                </div>
                <div className={'h-1/6'}>
                    <h6 className={'text-neutral-700 dark:text-white font-semibold'}>
                        {music.title}
                    </h6>
                    <small className={'text-neutral-700 dark:text-white'}>
                        {music.author}
                    </small>
                </div>
            </div>
        </div>
    );
};

export default Card;
