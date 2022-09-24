import React from 'react'
import Song from '../../controller/class/Song'


function PlayerDetails({ song }: { song: Song; }) {
    return (
        <div className='c-player--details'>
            <div className='details-img'>
                <img src={song.getSong.songImgUrl} alt='' />
            </div>
            <h3 className='details-title'> {song.getSong.title} </h3>
            <h4 className='details-artist'> {song.getSong.artist} </h4>
        </div>
    );
}

export default PlayerDetails;