// MusicProvider.tsx

import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import MusicProps from "../types/MusicProps.ts";
import musicsData from "../data/musics.json";

interface MusicContextProps {
    selectedMusic: MusicProps | null;
    setMusic: (music: MusicProps | null) => void;
    setPlaylists: () => void;
    playlist: MusicProps[] | null;
}

const MusicContext = createContext<MusicContextProps | undefined>(undefined);

export const useMusicContext = () => {
    const context = useContext(MusicContext);
    if (!context) {
        throw new Error('useMusicContext deve ser usado dentro de um MusicProvider');
    }
    return context;
};

interface MusicProviderProps {
    children: ReactNode;
}

export const MusicProvider: React.FC<MusicProviderProps> = ({ children }: MusicProviderProps) => {
    const [selectedMusic, setSelectedMusic] = useState<MusicProps | null>(null);
    const [playlist, setPlaylist] = useState<MusicProps[] | null>(null)

    const setMusic = (music: MusicProps | null) => {
        setSelectedMusic(music);
    };

    const setPlaylists = () => {
        setPlaylist(musicsData);
    }

    const contextValue: MusicContextProps = {
        selectedMusic,
        setMusic,
        setPlaylists,
        playlist,
    };

    return (
        <MusicContext.Provider value={contextValue}>
            {children}
        </MusicContext.Provider>
    );
};
