import { Direction, EquipType } from "Enums";
import { IItem } from "item/IItem";
import { Message } from "language/IMessages";
import Mod from "mod/Mod";
import { IPlayer } from "player/IPlayer";
import { ITile } from "tile/ITerrain";
export default class HelloWorld extends Mod {
    readonly messageHelloWorld: Message;
    readonly messageHelloLeftHand: Message;
    readonly messageHelloRightHand: Message;
    readonly messageHelloTerrain: Message;
    onLoad(): void;
    onUnload(): void;
    onGameScreenVisible(): void;
    onItemEquip(player: IPlayer, item: IItem, slot: EquipType): void;
    onMove(player: IPlayer, nextX: number, nextY: number, tile: ITile, direction: Direction): boolean | undefined;
}
