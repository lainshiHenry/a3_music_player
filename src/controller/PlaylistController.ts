import Song from './class/Song'
import '../data/songsList'
import songsList from '../data/songsList';

declare module PlaylistController { };

export default class PlaylistController {
    playList: Song[] = [];

    constructor() {
        this.playList = [];
        this._buildInitialList();
    }

    addSongToPlaylist(song: Song) {
        this.playList.push(song);
        console.log('after add: ' + this.playList);
    }

    getNextSong() {
        return this.playList.pop();
    }

    get getCurrentPlaylist() { return this.playList; }

    _buildInitialList() {
        // let tempSong: Song = new Song('test', 'test', 'test', 'test');
        songsList.forEach((songItem) => {
            this.addSongToPlaylist(songItem);
        });
    }
}