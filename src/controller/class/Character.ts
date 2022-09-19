enum CharacterTroupe {
    Spring,
    Summer,
    Autumn,
    winter,
    Other,
};

class Character {
    _name: String = '';
    _troupe: CharacterTroupe = CharacterTroupe.Other;
    _characterImg: String = '';

    constructor({ name, troupe = CharacterTroupe.Other, characterImg }: { name: string, troupe: CharacterTroupe, characterImg: string }) {
        this._name = name;
        this._troupe = troupe;
        this._characterImg = characterImg;
    }

    get charName() {
        return this._name;
    }


}

export default Character;