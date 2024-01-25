import React, { useState, useEffect } from "react";
import { FaBackwardStep, FaForwardStep, FaVolumeHigh, FaPlay, FaPause } from "react-icons/fa6";
import { Howl } from 'howler';
import { FaEllipsisV } from "react-icons/fa";
import VolumeControl from "./VolumeControl.tsx";

type MusicPlayerProps = {
    visible: boolean;
};

const MusicPlayer: React.FC<MusicPlayerProps> = (props: MusicPlayerProps) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [sound, setSound] = useState<Howl | null>(null);
    const [currentTime, setCurrentTime] = useState("00:00");
    const [duration, setDuration] = useState("00:00");


    const formatTime = (seconds: number): string => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        const formattedMinutes = String(minutes).padStart(2, "0");
        const formattedSeconds = String(remainingSeconds).padStart(2, "0");
        return `${formattedMinutes}:${formattedSeconds}`;
    };

    useEffect(() => {
        const audio = new Howl({
            src: ['src/data/test-music/test.mp3'],
            onplay: () => {
                setIsPlaying(true);
                updateCurrentTime();
            },
            onpause: () => setIsPlaying(false),
            onend: () => setIsPlaying(false),
            onload: () => setDuration(formatTime(audio.duration())),
        });

        setSound(audio);

        return () => {
            audio.unload();
        };
    }, []);

    useEffect(() => {
        let animationFrameId: number;

        const update = () => {
            if (sound && isPlaying) {
                setCurrentTime(formatTime(sound.seek()));
                animationFrameId = requestAnimationFrame(update);
            }
        };

        if (isPlaying) {
            animationFrameId = requestAnimationFrame(update);
        }

        return () => cancelAnimationFrame(animationFrameId);
    }, [isPlaying, sound]);

    const handlePlayPause = () => {
        if (sound) {
            if (isPlaying) {
                sound.pause();
            } else {
                sound.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleStop = () => {
        if (sound) {
            sound.stop();
            setIsPlaying(false);
        }
    };

    const updateCurrentTime = () => {
        if (sound) {
            setCurrentTime(formatTime(sound.seek()));
        }
    };

    return (
        <div className={'absolute bottom-0 w-full bg-white dark:bg-gray-900 h-20 border-t-2 dark:border-gray-700 border-gray-300 text-neutral-500 dark:text-gray-400'}>
            <div className={'flex justify-between items-center h-full py-3 px-6'}>
                <div className={'px-3 flex items-center'}>
                    <div className={'dark:hover:bg-gray-950 hover:bg-gray-200 p-3 rounded-full transition cursor-pointer'}>
                        <FaBackwardStep />
                    </div>
                    <div className={'dark:hover:bg-gray-950 hover:bg-gray-200 p-3 rounded-full transition cursor-pointer'} onClick={handlePlayPause}>
                        {isPlaying ? <FaPause /> : <FaPlay />}
                    </div>
                    <div className={'dark:hover:bg-gray-950 hover:bg-gray-200 p-3 rounded-full transition cursor-pointer'}>
                        <FaForwardStep />
                    </div>
                    <small>{currentTime} / {duration}</small>
                </div>
                <div>
                    <div className={'flex items-center'}>
                        <div>
                            <img className={'w-14 h-full'} src={'https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a396a61647'} alt={'Cruel Summer'} />
                        </div>
                        <div>
                            <h6>Cruel Summer</h6>
                            <small>Taylor Swift</small>
                        </div>
                        <div className={'dark:hover:bg-gray-950 hover:bg-gray-200 p-3 rounded-full transition cursor-pointer'}>
                            <FaEllipsisV />
                        </div>
                    </div>
                </div>
                <div className={'px-3 flex'}>
                    <div className={'dark:hover:bg-gray-950 hover:bg-gray-200 p-3 rounded-full transition cursor-pointer'}>
                        <VolumeControl />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MusicPlayer;
