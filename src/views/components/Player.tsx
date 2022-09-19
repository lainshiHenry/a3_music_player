import React, { useState, useRef, useEffect } from 'react'
import PlayerDetails from './PlayerDetails'
import PlayerControls from './PlayerControls'
import Song from '../../controller/class/Song';

interface Player {

};

const Player = ({ currentSongIndex, setCurrentSongIndex, nextSongIndex, songs }: { currentSongIndex: number, setCurrentSongIndex: Function, nextSongIndex: number, songs: Song[] }) => {
    const htmlAudioElement = new Audio(songs[currentSongIndex].getSong.songLocation);
    const audioElement = useRef(htmlAudioElement);
    const intervalRef = useRef(0);
    const isReady = useRef(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [trackProgress, setTrackProgress] = useState(0);

    const { duration } = audioElement.current;

    useEffect(() => {
        if (isPlaying) {
            audioElement.current.play();
            startTimer();
        } else {
            audioElement.current.pause();
        }
    }, [isPlaying]);

    useEffect(() => {
        return () => {
            audioElement.current.pause();
            clearInterval(intervalRef.current);
        }
    }, []);

    useEffect(() => {
        audioElement.current.pause();

        audioElement.current = new Audio(songs[nextSongIndex].getSong.songLocation);
        setTrackProgress(audioElement.current.currentTime);

        if (isReady.current) {
            audioElement.current.play();
            setIsPlaying(true);
            startTimer();
        } else {
            // isReady.current = true;
        }

    }, [currentSongIndex]);

    const startTimer = () => {
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            if (audioElement.current.ended) {
                SkipSong();
            } else {
                setTrackProgress(audioElement.current.currentTime);
            }
        }, 1000);
    }

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
        <div className='c-player' >
            <audio src={songs[currentSongIndex].getSong.songLocation} ref={audioElement} > </audio>
            <PlayerDetails song={songs[currentSongIndex]} />
            <input
                type='range'
                value={trackProgress}
                step='1'
                min='0'
                max={duration ? duration : '${duration}'}
                className='progress'
                onChange={(e) => onScrub(Number(e.target.value))}
                onMouseUp={onScrubEnd}
                onKeyUp={onScrubEnd}
            />
            <PlayerControls isPlaying={isPlaying} setIsPlaying={setIsPlaying} skipSong={SkipSong} />
            {/* <p><strong>Next up:</strong> {songs[nextSongIndex].title} by {songs[nextSongIndex].artist}</p> */}
        </div>
    )
}

export default Player