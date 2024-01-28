import React, { useEffect, useState } from "react";
import MusicProps from "../../types/MusicProps.ts";
import Card from "../shared/Card.tsx";
import musicsData from "../../data/musics.json";

type FavoritesProps = {
    searchQuery: string;
};

const Favorites: React.FC<FavoritesProps> = ({searchQuery}: FavoritesProps) => {
    const [data, setData] = useState<MusicProps[] | null>([]);
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const [filteredData, setFilteredData] = useState<MusicProps[] | null>([]);

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

    const handleSearch = (query: string) => {
        const filteredResults = data != null ? (data.filter((music) =>
            music.title.toLowerCase().startsWith(query.toLowerCase())
        )) : null;
        setFilteredData(filteredResults);
    };

    useEffect(() => {
        handleSearch(searchQuery);
    }, [searchQuery]);

    return (
        <div
            className={'grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 auto-rows-min h-full overflow-y-auto gap-4 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 sm:text-sm md:text-md lg:text-md'}>
            {filteredData != null && filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                    <Card key={index} music={item}/>
                ))
            ) : (
                searchQuery.length > 0 ? (
                    <p>Nenhum resultado encontrado.</p>
                ) : (
                    data != null && data.map((item, index) => (
                        <Card key={index} music={item}/>
                    ))
                )
            )}
        </div>
    );
};

export default Favorites;
