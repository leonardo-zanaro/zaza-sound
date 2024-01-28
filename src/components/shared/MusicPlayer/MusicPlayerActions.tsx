import React, {ReactNode} from 'react'

interface MusicPlayerActionsProps {
    children: ReactNode
}

const MusicPlayerActions:React.FC<MusicPlayerActionsProps> = ({children}: MusicPlayerActionsProps) => {
    return (
        <div className={'flex gap-2 px-6 items-center'}>
            {children}
        </div>
    );
}

export default MusicPlayerActions;