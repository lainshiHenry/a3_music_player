import React, { useState, useRef, useEffect } from 'react'
import PlayerDetails from './PlayerDetails'
import PlayerControls from './PlayerControls'

const Player = ({ currentSongIndex, setCurrentSongIndex, nextSongIndex, songs }) => {
    const audioElement = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (isPlaying) {
            audioElement.current.play();
        } else {
            audioElement.current.pause();
        }
    });

    const SkipSong = (forwards = true) => {
        if (forwards) {
            setCurrentSongIndex(() => {
                let temp = currentSongIndex;
                temp++;

                if (temp > songs.length - 1) {
                    temp = 0;
                }
                return temp;
            })
        } else {
            setCurrentSongIndex(() => {
                let temp = currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = songs.length - 1;
                }
                return temp;
            })
        }
    }


    return (
        <div className='c-player'>
            <audio src={songs[currentSongIndex].src} ref={audioElement}></audio>
            <PlayerDetails song={songs[currentSongIndex]} />
            <PlayerControls isPlaying={isPlaying} setIsPlaying={setIsPlaying} skipSong={SkipSong} />
            <p><strong>Next up:</strong> {songs[nextSongIndex].title} by {songs[nextSongIndex].artist}</p>
        </div>
    )
}
export default Player;