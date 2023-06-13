/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
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
