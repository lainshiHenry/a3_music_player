import React, { useState } from 'react'
import PlaylistItem from './PlaylistRowItem'
import AzamiProfileCover from '../../assets/images/song_covers/character_song/azami.png'
import TsumugiProfileCover from '../../assets/images/song_covers/character_song/tsumugi.png'
import ChtronProfileCover from '../../assets/images/song_covers/character_song/citron.png'

const Playlist = () => {
    const [isSelected, setIsSelected] = useState(false);

    return (
        <div className='p-9 m-9'>
            <PlaylistItem imageString={AzamiProfileCover} characterName='Azami' isSelected={isSelected} />
            <PlaylistItem imageString={ChtronProfileCover} characterName='Citron' />
            <PlaylistItem imageString={TsumugiProfileCover} characterName='Tsumugi' />
        </div>
    )
}

export default Playlist