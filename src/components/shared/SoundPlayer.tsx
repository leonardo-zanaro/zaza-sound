import React, { useState, useEffect } from "react";
import MusicPlayerSection from "./MusicPlayer/MusicPlayerRoot.tsx";
import MusicPlayerActions from "./MusicPlayer/MusicPlayerActions.tsx";
import MusicPlayerAction from "./MusicPlayer/MusicPlayerAction.tsx";
import { FaBackwardStep, FaEllipsisVertical, FaForwardStep, FaRepeat } from "react-icons/fa6";
import MusicPlayerPlayPause from "./MusicPlayer/MusicPlayerPlayPause.tsx";
import MusicPlayerTime from "./MusicPlayer/MusicPlayerTime.tsx";
import MusicPlayerContent from "./MusicPlayer/MusicPlayerContent.tsx";
import MusicPlayerVolume from "./MusicPlayer/MusicPlayerVolume.tsx";
import MusicPlayerRoot from "./MusicPlayer/MusicPlayerRoot.tsx";
import { useMusicContext } from "../../contexts/MusicContext.tsx";
import MusicProps from "../../types/MusicProps.ts";

interface SoundPlayerProps {}

const SoundPlayer: React.FC<SoundPlayerProps> = () => {
    const { selectedMusic } = useMusicContext();
    const [currentTime, setCurrentTime] = useState<string>('00:00');
    const [duration, setDuration] = useState<string>('00:00');
    const [volume, setVolume] = useState<number>(50);
    const [music, setMusic] = useState<MusicProps | null>(null);

    useEffect(() => {
        setMusic(selectedMusic);
    }, [selectedMusic]);

    const updateCurrentTime = (newTime: string) => {
        setCurrentTime(newTime);
    };

    const updateDuration = (newTime: string) => {
        setDuration(newTime);
    };

    const updateVolume = (newVolume: number) => {
        setVolume(newVolume);
    };

    return (
        <>
            {music != null ? (
                <MusicPlayerRoot>
                    <MusicPlayerSection>
                        <MusicPlayerActions>
                            <MusicPlayerAction icon={FaBackwardStep} />
                            <MusicPlayerPlayPause
                                music={selectedMusic}
                                onUpdateCurrentTime={updateCurrentTime}
                                onUpdateDuration={updateDuration}
                                volume={volume}
                            />
                            <MusicPlayerAction icon={FaForwardStep} />
                            <MusicPlayerTime currentTime={currentTime} duration={duration} />
                        </MusicPlayerActions>
                        <MusicPlayerActions>
                            <MusicPlayerContent music={selectedMusic} />
                            <MusicPlayerAction icon={FaEllipsisVertical} />
                        </MusicPlayerActions>
                        <MusicPlayerActions>
                            <MusicPlayerAction icon={FaRepeat} />
                            <MusicPlayerVolume volume={volume} onVolumeChange={updateVolume} />
                        </MusicPlayerActions>
                    </MusicPlayerSection>
                </MusicPlayerRoot>
            ) : (
                <></>
            )}
        </>
    );
};

export default SoundPlayer;
