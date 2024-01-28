import React, {ButtonHTMLAttributes, useEffect, useRef, useState} from 'react';
import { Howl } from 'howler';
import { FaPause, FaPlay } from 'react-icons/fa6';
import {twMerge} from "tailwind-merge";
import MusicProps from "../../../types/MusicProps.ts";

interface CustomHowl extends Howl {
    _audioContext?: AudioContext;
}

interface MusicPlayerPlayPauseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    onUpdateCurrentTime: (currentTime: string) => void;
    onUpdateDuration: (duration: string) => void;
    volume: number;
    music: MusicProps | null
}

const MusicPlayerPlayPause: React.FC<MusicPlayerPlayPauseProps> = ({onUpdateCurrentTime, onUpdateDuration, volume, music, ...rest }: MusicPlayerPlayPauseProps) => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [sound, setSound] = useState<Howl | null>(null);
    const [currentMusic, setCurrentMusic] = useState<MusicProps | null>(null);
    const currentMusicRef = useRef<MusicProps | null>(null);

    const formatTime = (seconds: number): string => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(remainingSeconds).padStart(2, '0');
        return `${formattedMinutes}:${formattedSeconds}`;
    };

    useEffect(() => {
        const handleMusicChange = () => {
            if (sound && isPlaying) {
                sound.pause();
                setIsPlaying(false);
            }

            if (music && music !== currentMusicRef.current) {
                handleClick();
            }

            currentMusicRef.current = music;
        };

        handleMusicChange();

        return handleMusicChange;
    }, [music]);

    useEffect(() => {
        initializeAudioContext();
        setCurrentMusic(music);
        updateCurrentTime();
    }, [music]);

    const initializeAudioContext = async () => {
        try {
            const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
            await audioContext.resume();
            const content = (music != null ? music.src : '');

            const audio: CustomHowl = new Howl({
                volume: volume / 100,
                onend: () => setIsPlaying(false),
                onload: () => {
                    const musicDuration = formatTime(audio.duration());
                    onUpdateDuration(musicDuration);
                },
                onpause: () => setIsPlaying(false),
                onplay: () => {
                    setIsPlaying(true);
                    updateCurrentTime();
                },
                src: [content],
            });

            setSound(audio);

            (audio as CustomHowl)._audioContext = audioContext;

            return () => {
                audio.unload();
                setCurrentMusic(null);
            };
        } catch (error) {
            console.error('Erro ao inicializar o contexto de áudio:', error);
        }
    };

    useEffect(() => {
        let animationFrameId: number;

        const update = () => {
            if (sound && isPlaying) {
                const currentTime = formatTime(sound.seek());
                onUpdateCurrentTime(currentTime);
                animationFrameId = requestAnimationFrame(update);
            }
        };

        if (isPlaying) {
            animationFrameId = requestAnimationFrame(update);
        }

        return () => cancelAnimationFrame(animationFrameId);
    }, [isPlaying, sound]);

    const handleClick = async () => {

        if (!sound || currentMusic?.id !== music?.id) {
            await initializeAudioContext();
            setCurrentMusic(music);
            setIsPlaying(true);
        } else {
            if (isPlaying) {
                sound.pause();
            } else {
                sound.play();
            }
            setIsPlaying(!isPlaying);
        }
    };



    useEffect(() => {
        if (sound) {
            sound.volume(volume / 100);
        }
    }, [volume]);

    const updateCurrentTime = () => {
        if (sound) {
            const currentTime = formatTime(sound.seek());
            onUpdateCurrentTime(currentTime);
        }
    };

    return (
        <div>
            <button
                {...rest}
                onClick={handleClick}
                className={twMerge(
                    'text-white rounded-full flex items-center justify-center m-0 bg-transparent dark:bg-gray-700 hover:outline-0 hover:shadow-transparent',
                    rest.className
                )}
            >
                {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
        </div>
    );
};

export default MusicPlayerPlayPause;
