import React, { useEffect, useState } from "react";
import MusicProps from "../../types/MusicProps.ts";
import Card from "../shared/Card.tsx";
import musicsData from "../../data/musics.json";

const Favorites: React.FC = () => {
    const [data, setData] = useState<MusicProps[] | undefined>([]);
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Neste exemplo, estamos usando os dados diretamente do arquivo importado
                const favoritesMusic = musicsData.filter(f => favorites.includes(f.id));
                setData(favoritesMusic);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className={'flex flex-wrap'}>
            {data !== undefined && data.length > 0 ?
                data.map((item, index) => (
                    <Card key={index} music={item} />
                ))
                :
                <div>
                    <h3 className={'text-neutral-700 dark:text-white font-semibold font-sans'}>Nenhum favorito encontrado!</h3>
                </div>}
        </div>
    );
};

export default Favorites;
