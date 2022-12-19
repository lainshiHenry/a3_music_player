export default class Song {
    private _title: string = '';
    private _artist: string = '';
    private _src: string = '';
    private _img_src: string = '';
    private _src_online: string = '';
    private _posterImg_src: string = '';

    constructor({ title, artist, src, img_src, src_online, posterImg_src = '' }: { title: string, artist: string, src: string, img_src: string, src_online: string, posterImg_src: string }) {
        this._title = title;
        this._artist = artist;
        this._src = src;
        this._img_src = img_src;
        this._src_online = src_online;
        this._posterImg_src = posterImg_src;
    }

    get getSong() {
        return {
            'title': this._title,
            'artist': this._artist,
            'songLocation': this._src,
            'songImgUrl': this._img_src,
            'songLocationOnline': this._src_online,
            'posterImageUrl': this._posterImg_src,
        };
    }
}