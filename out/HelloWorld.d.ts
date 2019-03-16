import { EquipType } from "entity/IHuman";
import { IPlayer } from "entity/player/IPlayer";
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
    onItemEquip(player: IPlayer, item: IItem, slot: EquipType): void;
    onMove(player: IPlayer, nextX: number, nextY: number, tile: ITile, direction: Direction): boolean | undefined;
}
