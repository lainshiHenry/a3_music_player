export enum CharacterTroupe {
    Spring,
    Summer,
    Autumn,
    Winter,
    Other,
};

export enum CharacterFirstNameEnum {
    Sakuya,
    Masumi,
    Tsuzuru,
    Itaru,
    Citron,
    Chikage,
    Tenma,
    Yuki,
    Muku,
    Misumi,
    Kazunari,
    Kumon,
    Banri,
    Juza,
    Taichi,
    Omi,
    Sakyo,
    Azami,
    Tsumugi,
    Tasuku,
    Hisoka,
    Homare,
    Azuma,
    Guy,
    Other,
}

class Character {
    _firstName: String = '';
    _lastName: String = '';
    _troupe: CharacterTroupe = CharacterTroupe.Other;
    _characterImg: String = '';
    _characterEnum: CharacterFirstNameEnum = CharacterFirstNameEnum.Other;

    constructor({ firstName = '', lastName = '', troupe = CharacterTroupe.Other, characterImg = '', characterEnum = CharacterFirstNameEnum.Other }: { firstName: string, lastName: string, troupe: CharacterTroupe, characterImg: string, characterEnum: CharacterFirstNameEnum }) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._troupe = troupe;
        this._characterImg = characterImg;
        this._characterEnum = characterEnum;
    }

    get getCharFirstName() { return this._firstName }
    get getCharLastName() { return this._lastName }
    get getCharName() { return this.getCharFirstName + ' ' + this.getCharLastName }
    get getCharTroupe() { return this._troupe }
    get getCharImg() { return this._characterImg }
    get getCharEnum() { return this._characterEnum }
}

export default Character;