import React, { useState } from 'react'
import PlayerActionButton from './PlayerActionButton'
import "./player.css"

const Player = ({ musicTitle = '', musicArtistName = '', musicCoverImage = null }) => {

    const [isPlaying, setIsPlaying] = useState(false);
    const LeftButton = <i className='fas fa-step-backward'></i>
    const RightButton = <i className='fas fa-step-forward'></i>
    const PlayButton = <i className='fas fa-play'></i>
    const PauseButton = <i className='fas fa-pause'></i>
    const [playerActionButtonIcon, setPlayerActionButtonIcon] = useState(PlayButton);

    function handlePlayPauseButton() {
        if (isPlaying) {
            setIsPlaying(false);
            setPlayerActionButtonIcon(PlayButton);
            console.log('Dev: User Selected Player has been paused');
        } else {
            setIsPlaying(true);
            setPlayerActionButtonIcon(PauseButton);
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
                <PlayerActionButton buttonIcon={LeftButton} onClickFunction={handleBackButton} isLargeButton={false} />
                <PlayerActionButton buttonIcon={playerActionButtonIcon} onClickFunction={handlePlayPauseButton} isLargeButton={true} />
                <PlayerActionButton buttonIcon={RightButton} onClickFunction={handleForwardButton} isLargeButton={false} />
            </div>
        </div>
    )
}

export default Player