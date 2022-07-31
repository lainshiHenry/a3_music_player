import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons'

const PlayerControls = () => {
    return (
        <div className='c-player--controls'>
            <button className='skip-btn'>
                <FontAwesomeIcon icon={faBackward} />
            </button>
            <button className='play-btn'>
                <FontAwesomeIcon icon={faPlay} />
            </button>
            <button className='skip-btn'>
                <FontAwesomeIcon icon={faForward} />
            </button>
        </div>
    )
}

export default PlayerControls