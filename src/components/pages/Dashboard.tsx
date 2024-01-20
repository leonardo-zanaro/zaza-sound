import React, { useState } from "react";
import MusicProps from "../../types/MusicProps.ts";
import Card from "../shared/Card.tsx";

const playlist: MusicProps[] = [
    {
        id: '1',
        title: 'Cruel Summer',
        category: 'pop',
        author: 'Taylor Swift',
        lyrics: '',
        publishedDate: '20/06/2023',
        image: 'https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a396a61647'
    },
    {
        id: '2',
        title: 'Blank Space',
        category: 'pop',
        author: 'Taylor Swift',
        lyrics: '',
        publishedDate: '20/06/2023',
        image: 'https://cdns-images.dzcdn.net/images/cover/68b4e986958b17f05b062ffa8d7ae114/350x350.jpg'
    },
    {
        id: '3',
        title: 'Style',
        category: 'pop',
        author: 'Taylor Swift',
        lyrics: '',
        publishedDate: '20/06/2023',
        image: 'https://cdns-images.dzcdn.net/images/cover/68b4e986958b17f05b062ffa8d7ae114/350x350.jpg'
    },
];

const Dashboard: React.FC = () => {
    const [data, setData] = useState<MusicProps[]>(playlist);

    return (
        <div className={'flex flex-wrap'}>
            {data.map((item, index) => (
                <Card key={index} music={item} />
            ))}
        </div>
    );
};

export default Dashboard;
