import React, { useState, useRef, useEffect } from 'react'
import PlayerDetails from './PlayerDetails'
import PlayerControls from './PlayerControls'
import Song from '../../controller/class/Song';
import { useCallback } from 'react';

const Player = ({ currentSongIndex, setCurrentSongIndex, nextSongIndex, songs }: { currentSongIndex: number, setCurrentSongIndex: Function, nextSongIndex: number, songs: Song[] }) => {
    const audioElement = useRef(new Audio());
    const intervalRef = useRef(0);
    const isReady = useRef(false);
    let playAudio: Function;
    const [isPlaying, setIsPlaying] = useState(false);
    const [trackProgress, setTrackProgress] = useState(0);
    // const currentAudioFile = useRef(null);

    const { duration } = audioElement.current;

    const loadSongToAudioElement = useCallback(({ songToSet }: { songToSet: Song }) => {
        audioElement.current.load();
        audioElement.current = new Audio(songToSet.getSong.songLocation);
    }, []);

    const getAudio = ({ song }: { song: Song }) => {
        return song.getSong.songLocationOnline !== '' ? song.getSong.songLocationOnline : song.getSong.songLocation;
    };

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
                console.log('song ended');
                SkipSong();

            } else {
                setTrackProgress(audioElement.current.currentTime);
            }
        }, 1000);
    }, [SkipSong]);

    playAudio = useCallback(() => {
        let playPromise = document.querySelector('audio')?.play();
        console.log(playPromise);

        if (playPromise) {
            playPromise
                .then(function () {
                    audioElement.current.play();
                    audioElement.current.muted = false;
                    setIsPlaying(true);
                    startTimer();
                })
                .catch(function (error) {
                    console.log('error: ' + error);
                    // const errorMessageHTMLelement = document.getElementById('errorMessage');
                    // if (errorMessageHTMLelement) errorMessageHTMLelement.innerHTML = 'error: ' + error;

                    // const errorAudioMessageHTMLelement = document.getElementById('audioOutput');
                    // if (errorAudioMessageHTMLelement) errorAudioMessageHTMLelement.innerHTML = 'audio output: ' + songs[currentSongIndex].getSong.songLocation;

                    // const errorHTMLAudioMessageHTMLelement = document.getElementById('HTMLaudioOutput');
                    // if (errorHTMLAudioMessageHTMLelement) errorHTMLAudioMessageHTMLelement.innerHTML = 'audio output: ' + audioElement.current.src;


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
        loadSongToAudioElement({ songToSet: songs[currentSongIndex] });

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

    console.log('song location: ' + songs[currentSongIndex].getSong.songLocationOnline);


    return (
        <div>
            <div className='c-player' >
                <audio src={getAudio({ song: songs[currentSongIndex] })} ref={audioElement} muted={true} autoPlay={false}>
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