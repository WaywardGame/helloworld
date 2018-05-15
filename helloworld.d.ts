import { EquipType, FacingDirection } from "Enums";
import { IItem } from "item/IItem";
import Mod from "mod/Mod";
import { IPlayer } from "player/IPlayer";
import { ITile } from "tile/ITerrain";
export default class HelloWorld extends Mod {
    private dictionary;
    onInitialize(): void;
    onLoad(saveData: any): void;
    onUnload(): void;
    onGameScreenVisible(): void;
    onItemEquip(player: IPlayer, item: IItem, slot: EquipType): void;
    onMove(player: IPlayer, nextX: number, nextY: number, tile: ITile, direction: FacingDirection): boolean | undefined;
}
