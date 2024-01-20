import React, {useEffect, useState} from "react";
import MusicProps from "../../types/MusicProps.ts";
import Card from "../shared/Card.tsx";
import musicsData from "../../data/musics.json";

const Favorites: React.FC = () => {
    const [data, setData] = useState<MusicProps[] | undefined>([]);
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    useEffect(() => {
        // Simula uma requisição assíncrona (ex: API call)
        const fetchData = async () => {
            try {
                // Neste exemplo, estamos usando os dados diretamente do arquivo importado
                const favoritesMusic = musicsData.map(f => {
                    const music = favorites.find(x => x == f.id);
                    if(music != undefined)
                        return f;

                    return;
                }).filter(x => x != undefined);
                setData(favoritesMusic);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        };

        fetchData();
    }, [favorites]);

    return (
        <div className={'flex flex-wrap'}>
            {data.map((item, index) => (
                <Card key={index} music={item} />
            ))}
        </div>
    );
};

export default Favorites;
