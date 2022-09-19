import React, { useState, useEffect } from 'react'
import Player from '../components/Player'
import PlaylistController from '../../controller/PlaylistController'
import songsList from '../../data/songsList'

const MainScreen = () => {
  const playlistController: PlaylistController = new PlaylistController();

  const [songs] = useState(songsList);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs]);

  useEffect(() => {
    console.log(playlistController.getCurrentPlaylist);
  })

  return (
    <div>
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
      <p>sample</p>
    </div>

  );
}

export default MainScreen