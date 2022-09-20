import Song from '../controller/class/Song'


const songsList: Song[] = [

    new Song({
        title: 'Circle of Seasons',
        artist: 'Sakuya, Tenma, Banri & Tsumugi',
        img_src: '../assets/images/song_covers/mixed_troupe/circle_of_seasons.png',
        src: '../assets/music/circle_of_seasons.mp3',
    }),





    new Song({
        title: 'Spring has Come!',
        artist: 'Spring Troupe',
        img_src: '../assets/images/song_covers/mixed_troupe/circle_of_seasons.png',
        src: '../assets/music/spring_has_come.mp3',
    }),
    new Song({
        title: 'Bokura no Kizuna',
        artist: 'Sakuya Sakuma & Masumi Usui',
        img_src: '../assets/images/song_covers/troupe_song/spring/bokura_no_izuna.jpg',
        src: '../assets/music/bokura_no_kizuna.mp3',
    }),
    new Song({
        title: 'Akaikami No Cherry Blossom',
        artist: 'Sakuya',
        src: '../assets/music/akaikami_no_cherry_blossom.mp3',
        img_src: '../assets/images/song_covers/character_song/sakuya.png',
    }),
    new Song({
        title: 'Sick Sick Sick',
        artist: 'Masumi Usui',
        img_src: '../assets/images/song_covers/mixed_troupe/circle_of_seasons.png',
        src: '../assets/music/circle_of_seasons.mp3',
    }),
];

export default songsList;

/*
    "Oresama Natsu Summer - Summer Troupe",
    "Rakuen Oasis - Tenma Sumeragi & Yuki Rurikawa",
    "Natsu no Dilemma - Tenma Sumeragi",
    "Minority - Yuki Rurikawa",
    "oneXone - Autumn Troupe",
    "Ichiya Kagiri no Aibou - Banri Settsu & Juza Hyodo",
    "Super Ultra Easy Mode - Banri Settsu",
    "Loner - Juza Hyodo",
    "To Bloom... - Winter Troupe",
    "Don't Cry - Tsumugi Tsukioka & Tasuku Takato",
    "Keyword - Tsumugi Tsukioka",
    "Beyond The Wall - Tasuku Takato",
    "Wonderland A Go Go! - Masumi Usui & Itaru Chigasaki",
    "Omoide no Nejimaki - Tsuzuru Minagi & Citron",
    "Dandelion no Akubi - Tsuzuru Minagi",
    "Gamer's High - Itaru Chigasaki",
    "Citron no Tadashii Nihongo Koza? - Citron",
    "Nyanbare! Nya Nya Nya Nya Nyansei - Yuki Rurikawa & Kazunari Miyoshi",
    "Susume! Pirates - Misumi Ikaruga & Muku Sakisaka",
    "Itsuka Oujisama ni... - Muku Sakisaka",
    "Ichi Ni Sankaku - Misumi Ikaruga",
    "Summer Time Love - Kazunari Miyoshi",
    "Just For Myself - Omi Fushimi & Taichi Nanao",
    "Buzama - Juza Hyodo & Sakyo Furuichi",
    "Living The Dream - Taichi Nanao",
    "Finder Goshi no Kizuna - Omi Fushimi",
    "Ame no Monologue - Sakyo Furuichi",
    "es no Yuutsu - Homare Arisugawa & Hisoka Mikage",
    "Shoutai - Tasuku Takoto & Azuma Yukishiro",
    "Traumerei to Kuhaku - Hisoka Mikage",
    "Kiteretsu Poemer - Homare Arisugawa",
    "Gekkoujou no Aria - Azuma Yukishiro",
    "A3 - Haru Natsu Aki Fuyu Blooming",
    "Haru Desu Ne - Spring Troupe",
    "Usotsuki wa Mahou no Hajimari - Sakuya Sakuma & Chikage Utsuki",
    "The Pride Of The Knights - Itaru Chigasaki & Chikage Utsuki",
    "Petenshi no Yuutsu - Chikage Utsuki",
    "Natsu tte Pari Pari! - Summer Troupe",
    "Exciting Charmer! - Tenma Sumeragi & Kumon Hyodo",
    "Konton ALL RIGHT! - Misumi Ikaruga & Kazunari Miyoshi",
    "Seiten no Sinker - Kumon Hyodo",
    "Second Shot - Autumn Troupe",
    "Respawn - Banri Settsu & Azami Izumida",
    "Road to Mantou Master! - Taichi Nanao & Azami Izumida",
    "Gaki Atsukai - Azami Izumida",
    "Precious To Us - Winter Troupe",
    "Unmask - Tsumugi Tsukioka & Guy",
    "Dokkoudou - Tasuku Takato & Guy",
    "Defragmentation - Guy",
    "Hajimari wa Quartet - Citron & Masumi Usui",
    "A3 Everblooming Spring - Spring Troupe",
    "A3 Everblooming Summer - Summer Troupe",
    "A3 Everblooming Autumn - Autumn Troupe",
    "A3 Everblooming Winter - Winter Troupe",
    "The Prince In Full Bloom - Muku Sakisaka & Kumon Hyodo",
    "Muddy Hero - Juza Hyodo & Omi Fushimi",
    "Plastic Poker - Hisoka Mikage & Azuma Yukishiro",
    "Growing Pain - Itaru Chigasaki & Banri Settsu",
    "Houkago Midnight - Misumi Ikaruga & Tsumugi Tsukioka",
    "Fukutsu no Chant - Tsuzuru Minagi & Tasuku Takato",
    "Sorachika - Omi Fushimi & Azami Izumida",
    "Suisei to Circus Ou - Homare Arisugawa & Kazunari Miyoshi",
    "MagiClap - Sakuya Sakuma & Muku Sakisaka",
    "Mikansei na Sora de - Yuki Rurikawa & Taichi Nanao",
    "Professional - Masumi Usui & Tenma Sumeragi",
    "Golden Encore - Chikage & Kumon & Azami & Guy",
    "Circle Of Seasons - Sakuya & Tenma & Banri & Tsumugi",
    "Kikyo no Hana - Sakyo Furuichi & Azuma Yukishiro",
    "Yoi no Mikazuki - Citron & Guy",
    "Scarlet Game - Hisoka Mikage & Chikage Utsuki",
    "Q to Ju - Kumon Hyodo & Juza Hyodo",
    "A3 Act Addict Actor - Sakuya & Tenma & Banri & Tsumugi",
    "My Dictionary - Sakuya Sakuma",
    "Hatsukoi X - Masumi Usui",
    "The storyteller - Tsuzuru Minagi",
    "Real Luck - Itaru Chigasaki",
    "A-I-U-E-Ookina Citron JAPAN - Citron",
    "SEEDS - Chikage Utsuki",
    "Sunflowers - Tenma Sumeragi",
    "Tailor Tailor! - Yuki Rurikawa",
    "Kimi Dake no Prince - Muku Sakisaka",
    "Sankaku Atsume - Misumi Ikaruga",
    "Be Greedy Diver! - Kazunari Miyoshi",
    "Yuukei no Catchball - Kumon Hyodo",
    "RE:portrait - Banri Settsu",
    "MIRAILIGHT - Juza Hyodo",
    "Make My Dream - Taichi Nanao",
    "Lone Wolves - Omi Fushimi",
    "Rojiura wa Itsumo Niwakaame - Sakyo Furuichi",
    "Teenager - Azami Izumida",
    "Zero Limit - Autumn Troupe",
    "Thawing - Winter Troupe",
    "Monologue - Sakuya Sakuma",
    "CROSS LINES - Tsumugi Tsukioka",
    "Train Myself - Tasuku Takato",
    "Nachtmusik to Hakugetsu - Hisoka Mikage",
    "Emotion - Homare Arisugawa",
    "Yoake no Junsui - Azuma Yukishiro",
    "For Your Journey ~The Bar's Secret~ - Guy",
    "The Contract - Tsumugi Tsukioka & Taichi Nanao",
    "Ittkei - Tenma Sumeragi & Tsuzuru Minagi",
    "Mirages Occur During Magical Nights - 	Masumi Usui & Chikage Utsuki",
    "Shake the Shape - Misumi Ikaruga & Kumon Hyodo",
    "Hungry Neighbors - Omi Fushimi & Sakyo Furuichi",
    "Continuation of the Grand Stay - Azuma Yukishiro & Guy",
    "Wandering Ghost - Juza Hyodo & Azami Izumida",
    "Step - Tasuku Takato & Homare Arisugawa",
    "Family Activation - Itaru Chigasaki & Citron", 
*/