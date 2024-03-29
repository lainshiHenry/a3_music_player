import Song from '../../controller/class/Song'

const PlaylistRowItem = ({ song, currentSongIndex, elementIndex, selectSong, songsArrayLength }: { song: Song, currentSongIndex: number, elementIndex: number, selectSong: Function, songsArrayLength: number }) => {
    return (
        currentSongIndex === elementIndex ?
            <li key={song.getSong.title} className='playlistRowItem playlistRowItemSelected' ><img className='playlistRowItemSongCoverImage' src={song.getSong.songImgUrl} alt={song.getSong.title}></img><p>{song.getSong.title}</p></li> :
            <li className='playlistRowItem' key={song.getSong.title} onClick={() => selectSong(elementIndex)}><img className='playlistRowItemSongCoverImage' src={song.getSong.songImgUrl} alt={song.getSong.title}></img><p>{song.getSong.title}</p></li>
    )
}

export default PlaylistRowItem