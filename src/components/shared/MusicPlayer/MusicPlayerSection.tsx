import React, {ReactNode} from 'react'

interface MusicPlayerSectionProps {
    children: ReactNode
}

const MusicPlayerSection:React.FC<MusicPlayerSectionProps> = ({children}: MusicPlayerSectionProps) => {
    return (
        <div className={'flex gap-2'}>
            {children}
        </div>
    );
}

export default MusicPlayerSection;