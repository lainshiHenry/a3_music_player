import React, { useState, useRef, useEffect } from 'react'
import PlayerDetails from './PlayerDetails'
import PlayerControls from './PlayerControls'
import Song from '../../controller/class/Song';
import { useCallback } from 'react';

// interface Player {

// };

const Player = ({ currentSongIndex, setCurrentSongIndex, nextSongIndex, songs, songSelectedViaClick }: { currentSongIndex: number, setCurrentSongIndex: Function, nextSongIndex: number, songs: Song[], songSelectedViaClick: boolean }) => {
    const htmlAudioElement = new Audio(songs[currentSongIndex].getSong.songLocation);
    const audioElement = useRef(htmlAudioElement);
    const intervalRef = useRef(0);
    const isReady = useRef(false);
    let playAudio: Function;
    const [isPlaying, setIsPlaying] = useState(false);
    const [trackProgress, setTrackProgress] = useState(0);
    // const currentAudioFile = useRef(null);
    const [currentAudioFile, setCurrentAudioFile] = useState(songs[currentSongIndex].getSong.songLocation);

    const { duration } = audioElement.current;

    const SkipSong = useCallback((forwards = true) => {
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
        playAudio();
    }, [currentSongIndex, setCurrentSongIndex, songs]);

    const startTimer = useCallback(() => {
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            if (audioElement.current.ended) {
                SkipSong();
            } else {
                setTrackProgress(audioElement.current.currentTime);
            }
        }, 1000);
    }, [SkipSong]);

    playAudio = useCallback(() => {
        let playPromise = document.querySelector('audio')?.play();

        if (playPromise) {
            playPromise
                .then(function () {
                    audioElement.current.play();
                    audioElement.current.muted = false;
                    setIsPlaying(true);
                    startTimer();
                })
                .catch(function (error) {
                    console.log('error: ' + error)
                });
        }
    }, [startTimer]);

    const pauseAudio = () => {
        audioElement.current.pause();
        setIsPlaying(false);
    }





    useEffect(() => {
        if (isPlaying) {
            playAudio();
        } else {
            pauseAudio();
        }
    }, [isPlaying, playAudio]);


    useEffect(() => {
        // pauseAudio();

        setTrackProgress(audioElement.current.currentTime);

        if (isReady.current) {
            playAudio();
        } else {
            // isReady.current = true;
        }

    }, [currentSongIndex, nextSongIndex, songs, playAudio]);



    const onScrub = (value: number) => {
        clearInterval(intervalRef.current);
        audioElement.current.currentTime = value;
        setTrackProgress(audioElement.current.currentTime);
    }

    const onScrubEnd = () => {
        if (!isPlaying) {
            setIsPlaying(true);
        }
        startTimer();
    }

    console.log('song location: ' + songs[currentSongIndex].getSong.songLocation);
    return (
        <div>
            <div className='c-player' >
                <audio src={songs[currentSongIndex].getSong.songLocation} ref={audioElement} muted={true} autoPlay={false}>
                    <source ></source>
                </audio>
                <PlayerDetails song={songs[currentSongIndex]} />
                <input
                    type='range'
                    value={trackProgress}
                    step='1'
                    min='0'
                    max={duration ? duration : 'NaN'}
                    className='progress'
                    onChange={(e) => onScrub(Number(e.target.value))}
                    onMouseUp={onScrubEnd}
                    onKeyUp={onScrubEnd}
                />
                <PlayerControls isPlaying={isPlaying} setIsPlaying={setIsPlaying} skipSong={SkipSong} />
                {/* <p><strong>Next up:</strong> {songs[nextSongIndex].getSong.title} by {songs[nextSongIndex].getSong.artist}</p> */}
            </div>

        </div>
    )
}

export default Player