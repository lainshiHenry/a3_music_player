import React from 'react'
import Player from '../components/Player'
import Playlist from '../components/Playlist'
import AzamiProfileCover from '../../assets/images/song_covers/character_song/azami.png'

const MainScreen = () => {
  return (
    <section className=''>
      <Player musicCoverImage={AzamiProfileCover} musicTitle={'Sample Music title'} musicArtistName={'Azami'} />
    </section>
  )
}

export default MainScreen