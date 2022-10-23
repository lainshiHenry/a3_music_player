import { useState, useEffect } from 'react'
import Player from '../components/Player'
import PlaylistController from '../../controller/PlaylistController'
import Playlist from '../components/Playlist'

const MainScreenPortrait = () => {
    const playlistController: PlaylistController = new PlaylistController();


    // const [songs] = useState(songsList);
    const [songs] = useState(playlistController.getCurrentPlaylist);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(0);
    let songSelectedViaClick: boolean = false;

    const selectSong = (index: number) => {
        songSelectedViaClick = true;
        // console.log('index:' + index + ' song title: ' + songs[index].getSong.title + ' song artist: ' + songs[index].getSong.artist);
        setCurrentSongIndex(index);

    }

    function loadModal() {
        console.log('modal is loading');
        var modal = document.getElementById("PlaylistModal")!;
        var openModalButton = document.getElementById("playlistModalButton");
        // var closeModalButton = document.getElementById("closeModalButton");

        if (openModalButton) {
            openModalButton.addEventListener('click', (e: MouseEvent) => {
                modal.style.display = "block";
            });
        }

        // if (closeModalButton) {
        //     closeModalButton.addEventListener('click', (e: MouseEvent) => {
        //         modal.style.display = "none";
        //     });
        // }

        // close modal on click outside of modal
        document.addEventListener('click', (e: MouseEvent) => {
            if (e.target == modal) {
                modal.style.display = "none";
            }
        });
    }

    useEffect(() => {
        loadModal();
        setNextSongIndex(() => {
            if (currentSongIndex + 1 > songs.length - 1) {
                return 0;
            } else {
                return currentSongIndex + 1;
            }
        });

    }, [currentSongIndex, songs]);

    return (
        <div className='mainScreenLayoutPortrait'>
            {/* <button id="playlistModalButton">Open Modal</button> */}
            <Player
                currentSongIndex={currentSongIndex}
                setCurrentSongIndex={selectSong}
                nextSongIndex={nextSongIndex}
                songs={songs}
            />
            <Playlist
                songs={songs}
                currentSongIndex={currentSongIndex}
                selectSong={selectSong}
            />
            <div>
                <span id="audioOutput"></span>
                <span id="HTMLaudioOutput"></span>
                <span id="errorMessage"></span>
            </div>
        </div>

    );
}

export default MainScreenPortrait