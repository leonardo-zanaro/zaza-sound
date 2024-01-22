import React from "react";
import {FaBackwardStep, FaForwardStep, FaVolumeHigh} from "react-icons/fa6";
import {FaEllipsisV, FaPlay} from "react-icons/fa";
type MusicPlayerProps = {
    visible: boolean
}


const PlayButton: React.FC<MusicPlayerProps> = (props: MusicPlayerProps) => {
    return (
        <div className={'absolute bottom-0 w-full bg-white dark:bg-gray-900 h-20 border-t-2 dark:border-gray-700 border-gray-300 text-neutral-500 dark:text-gray-400'}>
            <div className={'flex justify-between items-center h-full py-3 px-6'}>
                <div className={'px-3 flex'}>
                    <div className={'hover:bg-gray-950 p-3 rounded-full transition cursor-pointer'}>
                        <FaBackwardStep />
                    </div>
                    <div className={'hover:bg-gray-950 p-3 rounded-full transition cursor-pointer'}>
                        <FaPlay/>
                    </div>
                    <div className={'hover:bg-gray-950 p-3 rounded-full transition cursor-pointer'}>
                        <FaForwardStep/>
                    </div>
                </div>
                <div>
                    <div className={'flex items-center'}>
                        <div>
                            <img className={'w-14 h-full'}
                                 src={'https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a396a61647'}
                                 alt={'Cruel Summer'}/>
                        </div>
                        <div>
                            <h6>Cruel Summer</h6>
                            <small>Taylor Swift</small>
                        </div>
                        <div className={'hover:bg-gray-950 p-3 rounded-full transition cursor-pointer'}>
                            <FaEllipsisV/>
                        </div>
                    </div>
                </div>
                <div className={'px-3 flex'}>
                    <div className={'hover:bg-gray-950 p-3 rounded-full transition cursor-pointer'}>
                        <FaVolumeHigh  />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayButton;