import React, {useEffect, useState} from "react";
import MusicProps from "../../types/MusicProps.ts";
import Card from "../shared/Card.tsx";
import musicsData from "../../data/musics.json";

const Dashboard: React.FC = () => {
    const [data, setData] = useState<MusicProps[]>([]);
    useEffect(() => {
        // Simula uma requisição assíncrona (ex: API call)
        const fetchData = async () => {
            try {
                // Neste exemplo, estamos usando os dados diretamente do arquivo importado
                setData(musicsData);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className={'flex flex-wrap'}>
            {data.map((item, index) => (
                <Card key={index} music={item} />
            ))}
        </div>
    );
};

export default Dashboard;
