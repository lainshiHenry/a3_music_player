import React, { useState } from 'react'
import Player from '../components/Player'
import Playlist from '../components/Playlist'
import AzamiProfileCover from '../../assets/images/song_covers/character_song/azami.png'
import AzamiSong from '../../assets/music/buzama.mp3'

const MainScreen = () => {
  const [songs, setSongs] = useState([
    {
      title: 'sample title 1',
      artist: 'Sakuya',
      img_src: AzamiProfileCover,
      src: AzamiSong,
    },
    {
      title: 'sample title 2',
      artist: 'Tenma',
      img_src: '',
      src: '',
    },
    {
      title: 'sample title 3',
      artist: 'Banri',
      img_src: '',
      src: '',
    },
    {
      title: 'sample title 4',
      artist: 'Tsumugi',
      img_src: '',
      src: '',
    },
  ]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  return (
    <section className=''>
      <Player song={songs[currentSongIndex]} nextSong={songs[nextSongIndex]} />
    </section>
  )
}

export default MainScreen