import React, { useState, useEffect, useRef } from 'react'
import Player from '../components/Player'
import PlaylistController from '../../controller/PlaylistController'
import songsList from '../../data/songsList'
import Song from '../../controller/class/Song'

const MainScreen = () => {
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

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs]);

  return (
    <div className='mainScreenLayout'>
      <div className='playlistSection'>
        <ul>
          {
            songs.map((element: Song, index: number) => {
              return currentSongIndex === index ? <li key={element.getSong.title}><b>{element.getSong.title} - {element.getSong.artist}</b></li> : <li key={element.getSong.title} onClick={() => selectSong(index)}>{element.getSong.title} - {element.getSong.artist}</li>
            }
            )}
        </ul>
      </div>
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={selectSong}
        nextSongIndex={nextSongIndex}
        songs={songs}
        songSelectedViaClick={songSelectedViaClick}
      />

    </div>

  );
}

export default MainScreen