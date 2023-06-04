import React from 'react'
import Song from '../../controller/class/Song';
import PlaylistRowItem from './PlaylistRowItem';

const Playlist = ({ songs, currentSongIndex, selectSong }: { songs: Song[], currentSongIndex: number, selectSong: Function }) => {

    return (
        <div className='playlistSection'>
            <ul className='playlist'>
                {
                    songs.map((element: Song, index: number) => {
                        return <PlaylistRowItem
                            song={element}
                            currentSongIndex={currentSongIndex}
                            elementIndex={index}
                            selectSong={selectSong}
                            songsArrayLength={songs.length}
                        />
                    })
                }
            </ul>
        </div>
    )
}

export default Playlist