import { useState, useEffect } from 'react'
import Player from '../components/Player'
import PlaylistController from '../../controller/PlaylistController'
import Playlist from '../components/Playlist'
import SelectFromList from '../components/SelectFromList'

const MainScreen = () => {
  const playlistController: PlaylistController = new PlaylistController();


  // const [songs] = useState(songsList);
  const [songs] = useState(playlistController.getCurrentPlaylist);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  const selectSong = (index: number) => {
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
      <SelectFromList />
      <Playlist
        songs={songs}
        currentSongIndex={currentSongIndex}
        selectSong={selectSong}
      />
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={selectSong}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />

      <div>
        <span id="audioOutput"></span>
        <span id="HTMLaudioOutput"></span>
        <span id="errorMessage"></span>
      </div>
    </div>

  );
}

export default MainScreen