import { EquipType } from "game/entity/IHuman";
import Player from "game/entity/player/Player";
import Item from "game/item/Item";
import { ITile } from "game/tile/ITerrain";
import Message from "language/dictionary/Message";
import Mod from "mod/Mod";
import { Direction } from "utilities/math/Direction";
export default class HelloWorld extends Mod {
    readonly messageHelloWorld: Message;
    readonly messageHelloLeftHand: Message;
    readonly messageHelloRightHand: Message;
    readonly messageHelloTerrain: Message;
    onLoad(): void;
    onUnload(): void;
    onGameScreenVisible(): void;
    onItemEquip(player: Player, item: Item, slot: EquipType): void;
    onMove(player: Player, nextX: number, nextY: number, tile: ITile, direction: Direction): boolean | undefined;
}
