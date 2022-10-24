import React from 'react'
import Song from '../../controller/class/Song'


function PlayerDetails({ song }: { song: Song; }) {
    function loadImageModal(song: Song) {
        const modalImageLocation: HTMLElement = document.getElementById("modalImage")!;
        const songLocation = song.getSong.songImgUrl;

        if (modalImageLocation) {
            modalImageLocation.setAttribute('src', songLocation);
        }
    }

    return (
        <div className='c-player--details'>
            <div className='details-img'>
                <img id="playlistModalButton" src={song.getSong.songImgUrl} alt='' onClick={() => { loadImageModal(song); }} />
            </div>
            <h3 className='details-title'> {song.getSong.title} </h3>
            <h4 className='details-artist'> {song.getSong.artist} </h4>
        </div>
    );
}

export default PlayerDetails;