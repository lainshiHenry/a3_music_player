import Song from './class/Song'
import '../songsList'
import songsList from '../songsList';

// declare module PlaylistController { };

export default class PlaylistController {
    playList: Song[] = [];

    constructor() {
        this.playList = [];
        this._buildInitialList();
    }

    addSongToPlaylist(song: Song) {
        this.playList.push(song);
    }

    getNextSong() {
        return this.playList[this.playList.length - 1] ? this.playList.pop() : null;
    }

    get getCurrentPlaylist() { return this.playList; }

    _buildInitialList() {
        // let tempSong: Song = new Song('test', 'test', 'test', 'test');
        songsList.forEach((songItem) => {
            this.addSongToPlaylist(songItem);
        });
    }
}