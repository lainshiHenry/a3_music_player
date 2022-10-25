import React, { useState, useRef, useEffect } from 'react'
import PlayerDetails from './PlayerDetails'
import PlayerControls from './PlayerControls'
import Song from '../../controller/class/Song';
import { useCallback } from 'react';

const Player = ({
    audioElement,
    currentSongTime,
    setCurrentSongTime,
    songDuration,
    currentSongIndex,
    setCurrentSongIndex,
    nextSongIndex,
    songs,
    skipSongFunction,
    isPlaying,
    setIsPlaying,
    prevSongIndex,
    trackProgress,
    startTimerFunction,
    onScrubFunction,
    pauseAudioFunction,
    playAudioFunction,
}: {
    audioElement: React.MutableRefObject<HTMLAudioElement>,
    currentSongTime: number,
    setCurrentSongTime: Function,
    songDuration: number,
    currentSongIndex: number,
    setCurrentSongIndex: Function,
    nextSongIndex: number,
    songs: Song[],
    skipSongFunction: Function,
    isPlaying: boolean,
    setIsPlaying: Function,
    prevSongIndex: number,
    trackProgress: number,
    startTimerFunction: Function,
    onScrubFunction: Function,
    pauseAudioFunction: Function,
    playAudioFunction: Function,
}) => {

    const _getAudio = ({ song }: { song: Song }) => {
        console.log(trackProgress + '/' + songDuration);
        return song.getSong.songLocationOnline !== '' ? song.getSong.songLocationOnline : song.getSong.songLocation;
    };

    useEffect(() => {
        console.log('looking at isPlaying');
        if (isPlaying) {
            playAudioFunction();
            startTimerFunction();
        } else {
            pauseAudioFunction();
        }
    }, [isPlaying]);

    return (
        <div>
            <div className='c-player' >
                <audio src={_getAudio({ song: songs[currentSongIndex] })} ref={audioElement} typeof='audio/mpeg'>
                </audio>
                <PlayerDetails song={songs[currentSongIndex]} />
                <input
                    type='range'
                    value={trackProgress}
                    step='1'
                    min='0'
                    max={songDuration ? songDuration : 'NaN'}
                    className='progress'
                    onChange={(e) => onScrubFunction(Number(e.target.value))}
                />
                <PlayerControls
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                    skipSong={skipSongFunction}
                    currentSongIndex={currentSongIndex}
                    nextSongIndex={nextSongIndex}
                    prevSongIndex={prevSongIndex}
                />
                {/* <p><strong>Next up:</strong> {songs[nextSongIndex].getSong.title} by {songs[nextSongIndex].getSong.artist}</p> */}
            </div>

        </div>
    )
}

export default Player