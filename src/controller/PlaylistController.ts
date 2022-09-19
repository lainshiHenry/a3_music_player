import Song from './class/Song'

declare module PlaylistController { };

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
        return this.playList.pop();
    }

    get getCurrentPlaylist() { return this.playList; }

    _buildInitialList() {
        // let tempSong: Song = new Song('test', 'test', 'test', 'test');


    }
}