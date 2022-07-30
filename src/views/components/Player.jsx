import React, { useState } from 'react'
import PlayerActionButton from './PlayerActionButton'
import "./player.css"

const Player = ({ musicTitle = '', musicArtistName = '', musicCoverImage = null }) => {
    const [playerActionButtonText, setPlayerActionButtonText] = useState('');
    const [isPlaying, setIsPlaying] = useState(false);
    const leftArrow = 'Left';
    const rightArrow = 'Right';

    function handlePlayPauseButton() {
        if (isPlaying) {
            setIsPlaying(false);
            setPlayerActionButtonText('Play');
            console.log('Dev: User Selected Player has been paused');
        } else {
            setIsPlaying(true);
            setPlayerActionButtonText('Pause');
            console.log('Dev: User Selected Player is now playing');
        }
    }

    function handleBackButton() {
        console.log('Dev: User selected go back');
    }

    function handleForwardButton() {
        console.log('Dev: User selected go forward');
    }

    return (
        <div className='player'>
            <div className='playerMusicPicture'>
                <img className='musicPicture' src={musicCoverImage} alt=''></img>
                <h1>{musicTitle}</h1>
                <h3>{musicArtistName}</h3>
            </div>
            <div className='playerButtonControls'>
                <PlayerActionButton buttonIcon={leftArrow} onClickFunction={handleBackButton} isLargeButton={false} />
                <PlayerActionButton buttonIcon={playerActionButtonText} onClickFunction={handlePlayPauseButton} isLargeButton={true} />
                <PlayerActionButton buttonIcon={rightArrow} onClickFunction={handleForwardButton} isLargeButton={false} />
            </div>
        </div>
    )
}

export default Player