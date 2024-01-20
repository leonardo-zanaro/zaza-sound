import React, {useEffect, useState} from "react";
import {AiFillHeart} from "react-icons/ai";
type FavoriteButtonProps = {
    visible: boolean,
    id: string,
}


const FavoriteButton: React.FC<FavoriteButtonProps> = (props: FavoriteButtonProps) => {
    const [favorite, setFavorite] = useState<boolean>(false);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
        setFavorite(favorites.find((value: string) => value == props.id) != null);
    }, [favorite]);
    const changeFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
        if (favorite) {
            // Remove do localStorage
            const updatedFavorites = favorites.filter((id: string) => id !== props.id);
            localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
            setFavorite(false);
        } else {
            // Adiciona ao localStorage
            favorites.push(props.id);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            setFavorite(true);
        }
    }

    return (
        <div className={`absolute left-1 top-1 transition-all duration-300 opacity-${props.visible ? '100' : '0'} ${favorite ? 'text-red-600' : 'text-gray-700'}`} onClick={() => changeFavorite()}>
            <AiFillHeart />
        </div>
    );
};

export default FavoriteButton;