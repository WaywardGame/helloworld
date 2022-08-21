import { EquipType } from "game/entity/IHuman";
import Player from "game/entity/player/Player";
import Item from "game/item/Item";
import { ITile } from "game/tile/ITerrain";
import Message from "language/dictionary/Message";
import Mod from "mod/Mod";
export default class HelloWorld extends Mod {
    readonly messageHelloWorld: Message;
    readonly messageHelloMainHand: Message;
    readonly messageHelloOffHand: Message;
    readonly messageHelloTerrain: Message;
    onLoad(): void;
    onUnload(): void;
    onGameScreenVisible(): void;
    onItemEquip(player: Player, item: Item, slot: EquipType): void;
    onMove(player: Player, fromX: number, fromY: number, fromZ: number, fromTile: ITile, nextX: number, nextY: number, nextZ: number, tile: ITile): boolean | void | undefined;
}
