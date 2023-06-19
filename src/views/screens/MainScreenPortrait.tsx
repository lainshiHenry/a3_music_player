import React, { useState, useEffect, useCallback, useRef } from 'react'
import Player from '../components/Player'
import PlaylistController from '../../controller/PlaylistController'
import Playlist from '../components/Playlist'

const MainScreenPortrait = ({versionNumber}: {versionNumber: string}) => {
    const playlistController: PlaylistController = new PlaylistController();
    const currentSongInd: React.MutableRefObject<number> = useRef(0);
    const [songs] = useState(playlistController.getCurrentPlaylist);    
    // const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(0);
    const [prevSongIndex, setPrevSongIndex] = useState(0);
    
    const newCurrentSongTime = useRef(0);
    const newSongDurationTime = useRef(0);
    // const intervalRef: React.MutableRefObject<number> = useRef(0);
    var intervalRef: number = 0;
    const [trackProgress, setTrackProgress] = useState(0);
    const isShuffle: React.MutableRefObject<boolean> = useRef(false);
    const isRepeat: React.MutableRefObject<boolean> = useRef(false);
    const audioElement: React.MutableRefObject<HTMLAudioElement> = useRef(new Audio());
    const [isPlaying, setIsPlaying] = useState(!audioElement.current.paused);

    // Keeps track of IsPlaying
    useEffect(() => {
        setIsPlaying(!audioElement.current.paused)
    }, [audioElement.current.paused])

    useEffect(() => {
        loadModal();
        _playAudio();
    }, [audioElement.current.src])

    useEffect(() => {
        console.log('end');
        _checkForEndOfSong();
    }, [audioElement.current.ended])
    
    // interval
    useEffect(() => {
        const interval = setInterval(() => {
            _updateTrackProgress();
            // _checkForEndOfSong();
            console.log(audioElement.current.ended);
        }, 1000);
        return () => clearInterval(interval);
    }, [])

    // updates the actual track progress
    function _updateTrackProgress() {
        newCurrentSongTime.current = audioElement.current.currentTime;
        newSongDurationTime.current = audioElement.current.duration;
        setTrackProgress(newCurrentSongTime.current);
    }

    // checks for end of the song, check for if repeat is on or not
    function _checkForEndOfSong() {
        // if( newCurrentSongTime.current === newSongDurationTime.current ){
            // if( !isPlaying ) {
                console.log('song has ended');
                if( isRepeat.current ){
                    selectSong(currentSongInd.current);
                    _playAudio();
                } else {
                    selectSong(_getNextSongIndex(currentSongInd.current));
                    _playAudio();
                }    
            // }
        // }
    }

    function _toggleIsRepeat(){
        isRepeat.current = !isRepeat.current;
    }

    function _pauseAudio() {
        audioElement.current.pause();
    };

    const _playAudio = useCallback(() => {
        var playPromise = audioElement.current.play();
        console.log('Attempting to play automatically...');

        if (playPromise !== undefined) {
        // if (playPromise === 'fulfilled') {
            playPromise
                .then(() => {                    
                    console.log('The play() Promise fulfilled! Rock on!');
                    document.getElementById("errorMessage")!.innerHTML = '';
                    document.getElementById("errorMessage")!.style.display = 'none';
                })
                .catch((error: string) => {
                    console.log('The play() Promise rejected!');
                    console.log('error: ' + error);
                    document.getElementById("errorMessage")!.innerHTML = error;
                    document.getElementById("errorMessage")!.style.display = 'block';
                    // _pauseAudio();
                })
        }
    }, [isPlaying]);

    const _getNextSongIndex = (currSongIndex: number) => {
        let _temp = currSongIndex;
        _temp++;

        if (_temp > songs.length - 1) {
            _temp = 0;
        }
        return _temp;
    }


    const _getPrevSongIndex = (currSongIndex: number) => {
        let _temp = currSongIndex;
        _temp--;

        if (_temp < 0) {
            _temp = songs.length - 1;
        }
        return _temp;
    }

    function selectSong (index: number) {
        currentSongInd.current = index;
        setNextSongIndex(_getNextSongIndex(index));
        setPrevSongIndex(_getPrevSongIndex(index));
    }

    function loadModal() {
        console.log('modal is loading');
        var modal = document.getElementById("PlaylistModal")!;
        var openModalButton = document.getElementById("playlistModalButton");

        if (openModalButton) {
            openModalButton.addEventListener('click', (e: MouseEvent) => {
                
                modal.style.display = "block";
                console.log('modal opened');
            });
        }
        
        // close modal on click outside of modal
        document.addEventListener('click', (e: MouseEvent) => {
            if (e.target === modal) {
                modal.style.display = "none";
                console.log('modal closed');
            }
        });
        console.log('modal is loaded');
    }

    const onScrub = (value: number) => {
        audioElement.current.currentTime = value;
        setTrackProgress(audioElement.current.currentTime);
    }

    return (
        <div className='mainScreenLayoutPortrait'>
            {/* <button id="playlistModalButton">Open Modal</button> */}
            <Player
                audioElement={audioElement}
                songDuration={newSongDurationTime.current}
                currentSongTime={newCurrentSongTime.current}
                // currentSongIndex={currentSongIndex}
                currentSongIndex={currentSongInd.current}
                setCurrentSongIndex={selectSong}
                nextSongIndex={nextSongIndex}
                songs={songs}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                isRepeat={isRepeat.current}
                setIsRepeat={_toggleIsRepeat}
                skipSongFunction={selectSong}
                prevSongIndex={prevSongIndex}
                onScrubFunction={onScrub}
                trackProgress={trackProgress}
                // startTimerFunction={_startTimer}
                pauseAudioFunction={_pauseAudio}
                playAudioFunction={_playAudio}

            />
            <Playlist
                songs={songs}
                currentSongIndex={currentSongInd.current}
                selectSong={selectSong}
            />
            <span>Version: {versionNumber}</span>
        </div>
    );
}

export default MainScreenPortrait