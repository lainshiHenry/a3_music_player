import React from 'react'
import './playeractionbutton.css';

const PlayerActionButton = ({ buttonIcon, isLargeButton = false, onClickFunction = null }) => {
    return (
        <div>
            {isLargeButton ?
                <button className='playerActionButton largeButton' onClick={onClickFunction}>{buttonIcon}</button> :
                <button className='playerActionButton smallButton' onClick={onClickFunction}>{buttonIcon}</button>}
        </div>

    )
}

export default PlayerActionButton