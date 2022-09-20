import CharacterList from "../data/characterList";
import { CharacterFirstNameEnum } from "./class/Character";

declare module CharacterController { };

export default class CharacterController {
    getCharacterInfo(character: CharacterFirstNameEnum) {
        return (CharacterList.find(element => element.getCharEnum === character) ? CharacterList.find(element => element.getCharEnum === character) : '');
    }
}