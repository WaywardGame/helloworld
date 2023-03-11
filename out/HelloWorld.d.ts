import { EquipType } from "game/entity/IHuman";
import Player from "game/entity/player/Player";
import Item from "game/item/Item";
import Tile from "game/tile/Tile";
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
    onMove(player: Player, fromTile: Tile, tile: Tile): boolean | void | undefined;
}
