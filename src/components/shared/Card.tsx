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
            className={'p-4 w-2/12 bg-gray-200 dark:bg-gray-900 rounded-xl h-fit'}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={'flex flex-col'}>
                <div className={'relative'}>
                    <FavoriteButton visible={isHovered} id={music.id} />
                    <img
                        src={music.image}
                        alt={music.title}
                        className={'rounded-lg w-full h-auto'}
                    />
                    <div onClick={handlePlayClick}>
                        <PlayButton visible={isHovered} />
                    </div>
                </div>
                <div>
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
