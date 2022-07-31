import React from 'react'
import "./player.css"

const PlayerDetails = ({ song }) => {
    return (
        <div className='c-player--details'>
            <div className='details-img'>
                <img src={song.img_src} alt=''></img>
            </div>
            <h3 className='details-title'>{song.title}</h3>
            <h4 className='details-artist'>{song.artist}</h4>
        </div>
    )
}

export default PlayerDetails