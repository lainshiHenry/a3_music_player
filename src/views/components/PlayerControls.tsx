import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShuffle, faBackward, faPause, faPlay, faForward, faRepeat} from '@fortawesome/free-solid-svg-icons'

const PlayerControls = ({ isPlaying, setIsPlaying, skipSong, currentSongIndex, nextSongIndex, prevSongIndex }: { isPlaying: boolean, setIsPlaying: Function, skipSong: Function, currentSongIndex: number, nextSongIndex: number, prevSongIndex: number }) => {
// const PlayerControls =      
    return (
        <div className='c-player--controls'>
            {/* <button className='shuffle-btn' onClick={() => {}}>
                <FontAwesomeIcon icon={faShuffle} />
            </button> */}
            <button className='skip-btn' onClick={() => skipSong(prevSongIndex)}>
                <FontAwesomeIcon icon={faBackward} />
            </button>
            <button className='play-btn' onClick={() => setIsPlaying(!isPlaying)}>
                <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
            </button>
            <button className='skip-btn' onClick={() => skipSong(nextSongIndex)}>
                <FontAwesomeIcon icon={faForward} />
            </button>
            {/* <button className='repeat-btn selectionActive' onClick={() => {}}>
                <FontAwesomeIcon icon={faRepeat} />
            </button> */}
        </div>
    )
}

export default PlayerControls