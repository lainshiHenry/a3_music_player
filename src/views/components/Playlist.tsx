import React from 'react'
import Song from '../../controller/class/Song';
import PlaylistRowItem from './PlaylistRowItem';

const Playlist = ({ songs, currentSongIndex, selectSong }: { songs: Song[], currentSongIndex: number, selectSong: Function }) => {

    return (
        <div className='playlistSection'>
            <ul className='playlist'>
                {
                    songs.map((element: Song, index: number) => {
                        // return currentSongIndex === index ?
                        //     <li key={element.getSong.title}><b>{element.getSong.title} - {element.getSong.artist}</b></li> :
                        //     <li key={element.getSong.title} onClick={() => selectSong(index)}>{element.getSong.title} - {element.getSong.artist}</li>
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