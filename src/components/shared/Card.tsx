import React, {useState} from "react";
import MusicProps from "../../types/MusicProps.ts";
import PlayButton from "./PlayButton.tsx";
import FavoriteButton from "./FavoriteButton.tsx";
type CardProps = {
    music: MusicProps;
}
const Card: React.FC<CardProps> = (card: CardProps) => {
    const [visibleButton, setVisibleButton] = useState<boolean>(false)

    return(
        <div className={'p-4 w-2/12 bg-gray-200 dark:bg-gray-900 rounded-xl'} onMouseOver={() => setVisibleButton(true)} onMouseOut={() => setVisibleButton(false)}>
            <div className={'flex flex-col'}>
                <div className={'relative'}>
                    <FavoriteButton visible={visibleButton} id={card.music.id}/>
                    <img src={card.music.image} alt={card.music.title} className={'rounded-lg w-full h-auto'}/>
                    <PlayButton visible={visibleButton} />
                </div>
                <div>
                    <h6 className={'text-neutral-700 dark:text-white font-semibold'}>{card.music.title}</h6>
                    <small className={'text-neutral-700 dark:text-white'}>{card.music.author}</small>
                </div>
            </div>
        </div>
    );
}

export default Card;