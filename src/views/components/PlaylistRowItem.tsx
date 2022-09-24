import Song from '../../controller/class/Song'

const PlaylistRowItem = ({ song, currentSongIndex, elementIndex, selectSong, songsArrayLength }: { song: Song, currentSongIndex: number, elementIndex: number, selectSong: Function, songsArrayLength: number }) => {
    return (
        currentSongIndex === elementIndex ?
            <li key={song.getSong.title} className='playlistRowItem playlistRowItemSelected' ><b>{song.getSong.title} - {song.getSong.artist}</b></li> :
            <li className='playlistRowItem' key={song.getSong.title} onClick={() => selectSong(elementIndex)}>{song.getSong.title} - {song.getSong.artist}</li>
    )
}

export default PlaylistRowItem