import React, { useState, useEffect, useCallback, useRef } from 'react'
import Player from '../components/Player'
import PlaylistController from '../../controller/PlaylistController'
import Playlist from '../components/Playlist'

const MainScreenPortrait = () => {
    const playlistController: PlaylistController = new PlaylistController();
    const currentSongInd: React.MutableRefObject<number> = useRef(0);
    const [songs] = useState(playlistController.getCurrentPlaylist);    
    // const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(0);
    const [prevSongIndex, setPrevSongIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSongTime, setCurrentSongTime] = useState(0);
    // const intervalRef: React.MutableRefObject<number> = useRef(0);
    var intervalRef: number = 0;
    const [trackProgress, setTrackProgress] = useState(0);

    const audioElement: React.MutableRefObject<HTMLAudioElement> = useRef(new Audio());

    const _startTimer = useCallback(() => {
        intervalRef = setInterval(() => {
            setTrackProgress(audioElement.current.currentTime);
            
            if(audioElement.current.currentTime === audioElement.current.duration) {
                console.log("song has ended");
                selectSong(_getNextSongIndex(currentSongInd.current));
                clearInterval(intervalRef);
                setTrackProgress(0);
            }
        }, 1000);
    }, []);

    function _pauseAudio() {
        audioElement.current.pause();
        setIsPlaying(false);
    };

    function _loadAudio(){
        audioElement.current.load();
        audioElement.current.src = songs[currentSongInd.current].getSong.songLocationOnline;
        setIsPlaying(false);

    }

    const _playAudio = useCallback(() => {
        // // audioElement.current.src = songs[currentSongInd.current].getSong.songLocationOnline;
        // console.log(songs[currentSongInd.current].getSong.songLocationOnline);
        // fetch(songs[currentSongInd.current].getSong.songLocationOnline, {
        //     mode: 'no-cors',
        // })
        //     .then(response => {
        //         console.log(`response: ${response.url}`);
        //         response.blob() 
        //     })
        //     .then(blob => {
        //         console.log(blob);
        //         // audioElement.current.srcObject = blob;
        //         // return audioElement.current.play();
        //     })
        //     .then(_ => {
        //         setIsPlaying(true);
        //         console.log('The play() Promise fulfilled! Rock on!');
        //     })
        //     .catch(e => {
        //         setIsPlaying(false);
        //         console.log('The play() Promise rejected!');
        //         console.log('error: ' + e);
                
        //     })
        var playPromise = audioElement.current.play();
        console.log(playPromise);
        console.log('Attempting to play automatically...');

        if (playPromise !== undefined) {
        // if (playPromise === 'fulfilled') {
            playPromise
                .then(() => {
                    setIsPlaying(true);
                    
                    console.log('The play() Promise fulfilled! Rock on!');
                    document.getElementById("errorMessage")!.innerHTML = '';
                    document.getElementById("errorMessage")!.style.display = 'none';
                })
                .catch((error: string) => {
                    console.log('The play() Promise rejected!');
                    console.log('error: ' + error);
                    document.getElementById("errorMessage")!.innerHTML = error;
                    document.getElementById("errorMessage")!.style.display = 'block';
                    _pauseAudio();
                })
        }
        setIsPlaying(true);
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
        // _pauseAudio();
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

    useEffect(() => {
        _pauseAudio();
        loadModal();
        _loadAudio();
        _playAudio();
    }, [currentSongInd.current]);

    return (
        <div className='mainScreenLayoutPortrait'>
            {/* <button id="playlistModalButton">Open Modal</button> */}
            <Player
                audioElement={audioElement}
                songDuration={audioElement.current.duration}
                currentSongTime={audioElement.current.currentTime}
                setCurrentSongTime={setCurrentSongTime}
                // currentSongIndex={currentSongIndex}
                currentSongIndex={currentSongInd.current}
                setCurrentSongIndex={selectSong}
                nextSongIndex={nextSongIndex}
                songs={songs}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                skipSongFunction={selectSong}
                prevSongIndex={prevSongIndex}
                onScrubFunction={onScrub}
                trackProgress={trackProgress}
                startTimerFunction={_startTimer}
                pauseAudioFunction={_pauseAudio}
                playAudioFunction={_playAudio}
            />
            <Playlist
                songs={songs}
                currentSongIndex={currentSongInd.current}
                selectSong={selectSong}
            />
        </div>

    );
}

export default MainScreenPortrait