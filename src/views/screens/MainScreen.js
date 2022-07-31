import React, { useState, useEffect } from 'react'
import Player from '../components/Player'
import Playlist from '../components/Playlist'
import AzamiProfileCover from '../../assets/images/song_covers/character_song/azami.png'
import SakuyaProfileCover from '../../assets/images/song_covers/character_song/sakuya.png'
import TenmaProfileCover from '../../assets/images/song_covers/character_song/tenma.png'
import BanriProfileCover from '../../assets/images/song_covers/character_song/banri.png'
import TsumugiProfileCover from '../../assets/images/song_covers/character_song/tsumugi.png'
import AzamiSong from '../../assets/music/buzama.mp3'
import SakuyaSong from '../../assets/music/my_dictionary.mp3'
import TenmaSong from '../../assets/music/step.mp3'
import BanriSong from '../../assets/music/second_shot.mp3'
import TsumugiSong from '../../assets/music/precious_to_us.mp3'

const MainScreen = () => {
  const [songs] = useState([
    {
      title: 'sample title 1',
      artist: 'Sakuya',
      img_src: SakuyaProfileCover,
      src: SakuyaSong,
    },
    {
      title: 'sample title 2',
      artist: 'Tenma',
      img_src: TenmaProfileCover,
      src: TenmaSong,
    },
    {
      title: 'sample title 3',
      artist: 'Banri',
      img_src: BanriProfileCover,
      src: BanriSong,
    },
    {
      title: 'sample title 4',
      artist: 'Tsumugi',
      img_src: TsumugiProfileCover,
      src: TsumugiSong,
    },
  ]);
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
  }, [currentSongIndex]);

  return (
    <section className=''>
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </section>
  )
}

export default MainScreen