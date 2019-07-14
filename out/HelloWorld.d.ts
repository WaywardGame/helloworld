import { EquipType } from "entity/IHuman";
import Player from "entity/player/Player";
import { IItem } from "item/IItem";
import Message from "language/dictionary/Message";
import Mod from "mod/Mod";
import { ITile } from "tile/ITerrain";
import { Direction } from "utilities/math/Direction";
export default class HelloWorld extends Mod {
    readonly messageHelloWorld: Message;
    readonly messageHelloLeftHand: Message;
    readonly messageHelloRightHand: Message;
    readonly messageHelloTerrain: Message;
    onLoad(): void;
    onUnload(): void;
    onGameScreenVisible(): void;
    onItemEquip(player: Player, item: IItem, slot: EquipType): void;
    onMove(player: Player, nextX: number, nextY: number, tile: ITile, direction: Direction): boolean | undefined;
}
