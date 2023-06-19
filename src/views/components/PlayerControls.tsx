import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShuffle, faBackward, faPause, faPlay, faForward, faRepeat} from '@fortawesome/free-solid-svg-icons'

interface PlaterControlsInterface {
    isPlaying: boolean,
    setIsPlaying: Function,
    isRepeat: boolean,
    setIsRepeat: Function,
    skipSong: Function, 
    currentSongIndex: number, 
    nextSongIndex: number, 
    prevSongIndex: number
}


const PlayerControls = ({ isPlaying, setIsPlaying, isRepeat, setIsRepeat, skipSong, currentSongIndex, nextSongIndex, prevSongIndex }: PlaterControlsInterface) => {
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
            <button className='repeat-btn' onClick={() => {setIsRepeat(!isRepeat); console.log(`repeat is ${!isRepeat}`)}}>
                <FontAwesomeIcon icon={faRepeat}  pulse={isRepeat ? true : false} color={isRepeat ? '#000' : '#888'}/>
            </button>
        </div>
    )
}

export default PlayerControls