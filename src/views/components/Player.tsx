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
    prevSongIndex
}: { audioElement: React.MutableRefObject<HTMLAudioElement>, currentSongTime: number, setCurrentSongTime: Function, songDuration: number, currentSongIndex: number, setCurrentSongIndex: Function, nextSongIndex: number, songs: Song[], skipSongFunction: Function, isPlaying: boolean, setIsPlaying: Function, prevSongIndex: number }) => {

    const intervalRef: React.MutableRefObject<number> = useRef(0);
    // let playAudio: Function;

    const [trackProgress, setTrackProgress] = useState(0);

    const _getAudio = ({ song }: { song: Song }) => {
        console.log(trackProgress + '/' + songDuration);
        return song.getSong.songLocationOnline !== '' ? song.getSong.songLocationOnline : song.getSong.songLocation;
    };

    const startTimer = useCallback(() => {
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            if (audioElement.current != null) {
                if (audioElement.current.ended) {
                    console.log('song ended');
                    skipSongFunction();

                } else {
                    setTrackProgress(currentSongTime);
                }
            }
        }, 1000);
    }, []);

    const playAudio = useCallback(() => {
        // var playPromise = document.querySelector('audio')!.play();
        var playPromise = audioElement.current.play();
        console.log('Attempting to play automatically...');

        // if (playPromise !== undefined) {
        //     playPromise
        //         .then(function () {
        //             setIsPlaying(true);
        //             startTimer();
        //             console.log('The play() Promise fulfilled! Rock on!');
        //             document.getElementById("errorMessage")!.innerHTML = '';
        //             document.getElementById("errorMessage")!.style.display = 'none';
        //         })
        //         .catch(function (error) {
        //             // setIsPlaying(false);
        //             console.log('The play() Promise rejected!');
        //             console.log('error: ' + error);
        //             document.getElementById("errorMessage")!.innerHTML = error;
        //             document.getElementById("errorMessage")!.style.display = 'block';
        //         });
        // }
    }, [isPlaying]);

    const pauseAudio = () => {
        audioElement.current.pause();
        // setIsPlaying(false);
    }

    useEffect(() => {
        console.log('looking at isPlaying');
        if (isPlaying) {
            playAudio();
            setTrackProgress(audioElement.current.currentTime);
        } else {
            pauseAudio();
        }
    }, [isPlaying]);

    const onScrub = (value: number) => {
        audioElement.current.currentTime = value;
        setTrackProgress(audioElement.current.currentTime);
    }

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
                    onChange={(e) => onScrub(Number(e.target.value))}
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