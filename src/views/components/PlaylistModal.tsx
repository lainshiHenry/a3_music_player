import React from 'react'
import Song from '../../controller/class/Song'
import Playlist from './Playlist'

const PlaylistModal = ({ songs, currentSongIndex, selectSong }: { songs: Song[], currentSongIndex: number, selectSong: Function }) => {
    return (
        <div id='PlaylistModal' className='playlistModal' role='modal'>
            <div className='modalContent'>
                <span className='closeButton' id="closeModalButton">&times;</span>
                <p>Some text</p>
                {/* <Playlist
                    songs={songs}
                    currentSongIndex={currentSongIndex}
                    selectSong={selectSong}
                /> */}
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