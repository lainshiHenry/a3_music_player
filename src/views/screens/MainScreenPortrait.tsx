import { useState, useEffect, useCallback, useRef } from 'react'
import Player from '../components/Player'
import PlaylistController from '../../controller/PlaylistController'
import Playlist from '../components/Playlist'

const MainScreenPortrait = () => {
    const playlistController: PlaylistController = new PlaylistController();

    const [songs] = useState(playlistController.getCurrentPlaylist);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(0);
    const [prevSongIndex, setPrevSongIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSongTime, setCurrentSongTime] = useState(0);
    // const intervalRef: React.MutableRefObject<number> = useRef(0);
    var intervalRef: number = 0;
    const [trackProgress, setTrackProgress] = useState(0);

    const audioElement: React.MutableRefObject<HTMLAudioElement> = useRef(new Audio());

    const _startTimer = useCallback(() => {
        // clearInterval(intervalRef.current);
        // intervalRef.current = audioElement.current.currentTime;
        intervalRef = setInterval(() => {
            // console.log(intervalRef);
            setTrackProgress(audioElement.current.currentTime);
        }, 1000);
    }, []);

    let currentAudioElementReadyState;

    function _pauseAudio() {
        audioElement.current.pause();
        setIsPlaying(false);
    };

    const _playAudio = useCallback(() => {
        var playPromise = audioElement.current.play();
        console.log(playPromise);
        console.log('Attempting to play automatically...');

        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    setIsPlaying(true);
                    // startTimer();
                    console.log('The play() Promise fulfilled! Rock on!');
                    document.getElementById("errorMessage")!.innerHTML = '';
                    document.getElementById("errorMessage")!.style.display = 'none';
                })
                .catch((error: string) => {
                    console.log('The play() Promise rejected!');
                    console.log('error: ' + error);
                    document.getElementById("errorMessage")!.innerHTML = error;
                    document.getElementById("errorMessage")!.style.display = 'block';
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
        let _temp = currentSongIndex;
        _temp--;

        if (_temp < 0) {
            _temp = songs.length - 1;
        }
        return _temp;
    }

    const selectSong = (index: number) => {
        // console.log('index:' + index + ' song title: ' + songs[index].getSong.title + ' song artist: ' + songs[index].getSong.artist);
        setCurrentSongIndex(index);
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
            });
        }

        // close modal on click outside of modal
        document.addEventListener('click', (e: MouseEvent) => {
            if (e.target == modal) {
                modal.style.display = "none";
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
        // console.log(audioElement.current);
        // console.log(audioElement.current.readyState);
        currentAudioElementReadyState = audioElement.current.readyState;

        _playAudio();
    }, [currentSongIndex]);



    return (
        <div className='mainScreenLayoutPortrait'>
            {/* <button id="playlistModalButton">Open Modal</button> */}
            <Player
                audioElement={audioElement}
                songDuration={audioElement.current.duration}
                currentSongTime={audioElement.current.currentTime}
                setCurrentSongTime={setCurrentSongTime}
                currentSongIndex={currentSongIndex}
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
                currentSongIndex={currentSongIndex}
                selectSong={selectSong}
            />
        </div>

    );
}

export default MainScreenPortrait