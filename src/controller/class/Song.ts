export default class Song {
    private _title: string = '';
    private _artist: string = '';
    private _src: string = '';
    private _img_src: string = '';

    constructor({ title, artist, src, img_src }: { title: string, artist: string, src: string, img_src: string }) {
        this._title = title;
        this._artist = artist;
        this._src = src;
        this._img_src = img_src;
    }

    get getSong() {
        return {
            'title': this._title,
            'artist': this._artist,
            'songLocation': this._src,
            'songImgUrl': this._img_src,
        };
    }
}