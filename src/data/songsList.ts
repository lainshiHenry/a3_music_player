// import TenmaProfileCover from '../assets/images/song_covers/character_song/sakuya.png'
// import BanriProfileCover from '../assets/images/song_covers/character_song/sakuya.png'
// import TsumugiProfileCover from '../assets/images/song_covers/character_song/sakuya.png'
// import CircleOfSeasonsProfileCover from '../assets/images/song_covers/mixed_troupe/circle_of_seasons.png'
// import SakuyaSong from '../assets/music/akaikami_no_cherry_blossom'
// import CircleOfSeasonsSong from '../assets/music/circle_of_seasons.mp3'
// import BuzamaSong from '../assets/music/buzama.mp3'
// import DontCrySong from '../assets/music/dont_cry.mp3'
import Song from '../controller/class/Song'


const songsList: Song[] = [
    new Song({
        title: 'title',
        artist: 'artist',
        src: '../assets/music/akaikami_no_cherry_blossom.mp3',
        img_src: '../assets/images/song_covers/character_song/sakuya.png',
    }),
    new Song({
        title: 'Circle of Seasons',
        artist: 'Sakuya, Tenma, Banri & Tsumugi',
        img_src: '../assets/images/song_covers/mixed_troupe/circle_of_seasons.png',
        src: '../assets/music/circle_of_seasons.mp3',
    }),
    // {
    //     title: 'sample title 3',
    //     artist: 'Banri',
    //     img_src: BanriProfileCover,
    //     src: BuzamaSong,
    // },
    // {
    //     title: 'sample title 4',
    //     artist: 'Tsumugi',
    //     img_src: TsumugiProfileCover,
    //     src: DontCrySong,
    // },
];

export default songsList;