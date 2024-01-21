import React, { useEffect, useState } from "react";
import MusicProps from "../../types/MusicProps.ts";
import Card from "../shared/Card.tsx";
import musicsData from "../../data/musics.json";

type DashboardProps = {
    searchQuery: string;
};

const Dashboard: React.FC<DashboardProps> = ({ searchQuery }: DashboardProps) => {
    const [data, setData] = useState<MusicProps[]>([]);
    const [filteredData, setFilteredData] = useState<MusicProps[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setData(musicsData);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        };

        fetchData();
    }, []);

    const handleSearch = (query: string) => {
        const filteredResults = data.filter((music) =>
            music.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(filteredResults);
    };

    useEffect(() => {
        handleSearch(searchQuery);
    }, [searchQuery]);

    return (
        <div className={'flex flex-wrap'}>
            {filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                    <Card key={index} music={item} />
                ))
            ) : (
                searchQuery.length > 0 ? (
                    <p>Nenhum resultado encontrado.</p>
                ) : (
                    data.map((item, index) => (
                        <Card key={index} music={item} />
                    ))
                )
            )}
        </div>
    );
};

export default Dashboard;
