import React, {ReactNode} from 'react'

interface MusicPlayerRootProps {
    children: ReactNode
}

const MusicPlayerSection:React.FC<MusicPlayerRootProps> = ({children}: MusicPlayerRootProps) => {
    return (
        <div className={'flex justify-between items-center absolute bottom-0 bg-gray-900 w-full h-20'}>
            {children}
        </div>
    );
}

export default MusicPlayerSection;