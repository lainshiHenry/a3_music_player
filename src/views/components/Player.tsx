import { useState, useRef, useEffect } from 'react'
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

    const { duration } = audioElement.current;

    const loadSongToAudioElement = useCallback(({ songToSet }: { songToSet: Song }) => {
        audioElement.current.pause();
        audioElement.current.load();
        audioElement.current = new Audio(getAudio({ song: songToSet }));
    }, []);

    const getAudio = ({ song }: { song: Song }) => {
        console.log('location online: ' + song.getSong.songLocationOnline);
        console.log('localtion local: ' + song.getSong.songLocation);

        console.log(trackProgress + '/' + duration);
        return song.getSong.songLocationOnline !== '' ? song.getSong.songLocationOnline : song.getSong.songLocation;
        // return song.getSong.songLocationOnline;
    };

    const SkipSong = useCallback((forwards = true) => {
        // pauseAudio();
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
        // playAudio();
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
        var playPromise = document.querySelector('audio')!.play();
        // var playPromise = audioElement.current.play();
        console.log('Attempting to play automatically...');

        if (playPromise !== undefined) {
            playPromise
                .then(function () {
                    audioElement.current.play();
                    setIsPlaying(true);
                    startTimer();
                    console.log('The play() Promise fulfilled! Rock on!');
                    document.getElementById("errorMessage")!.innerHTML = '';
                    document.getElementById("errorMessage")!.style.display = 'none';
                })
                .catch(function (error) {
                    setIsPlaying(false);
                    console.log('The play() Promise rejected!');
                    console.log('error: ' + error);
                    document.getElementById("errorMessage")!.innerHTML = error;
                    document.getElementById("errorMessage")!.style.display = 'block';
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

        // if (isReady.current) {
        //     playAudio();
        // } else {
        //     // isReady.current = true;
        // }

    }, [currentSongIndex, nextSongIndex, songs, playAudio]);



    const onScrub = (value: number) => {
        audioElement.current.currentTime = value;
        setTrackProgress(audioElement.current.currentTime);
    }

    const onScrubEnd = () => {
        // audioElement.current.pause();
        // setIsPlaying(true);
        // audioElement.current.play();
        // startTimer();
    }

    return (
        <div>
            <div className='c-player' >
                <audio src={getAudio({ song: songs[currentSongIndex] })} ref={audioElement} typeof='audio/mpeg'>
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