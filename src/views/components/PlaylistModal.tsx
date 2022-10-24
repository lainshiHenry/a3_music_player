import React from 'react'
import Song from '../../controller/class/Song'
import Playlist from './Playlist'

const PlaylistModal = ({ songs, currentSongIndex, selectSong }: { songs: Song[], currentSongIndex: number, selectSong: Function }) => {
    return (
        <div id='PlaylistModal' className='playlistModal' role='modal'>
            <div className='modalContent'>
                {/* <span className='closeButton' id="closeModalButton">&times;</span> */}
                {/* <p id="modalText">Some text</p> */}
                <img id="modalImage" className="playlistModalImage" src="" alt=""></img>
                {/* <p>{window.innerHeight} x {window.innerWidth}</p> */}
                <span id="errorMessage"></span>
            </div>
        </div>
    )
}

export default PlaylistModal

/*<Playlist
                songs={songs}
                currentSongIndex={currentSongIndex}
                selectSong={selectSong}
            /> */