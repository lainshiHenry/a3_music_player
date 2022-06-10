import React from 'react'
import Player from '../components/Player'
import Playlist from '../components/Playlist'

const MainScreen = () => {
  return (
    <section className=' top-0 left-0'>
      <Player />
      <Playlist />
    </section>
  )
}

export default MainScreen