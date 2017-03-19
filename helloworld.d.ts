import { EquipType, FacingDirection } from "Enums";
import { IItem } from "item/IItem";
import Mod from "mod/Mod";
import { ITile } from "tile/ITerrain";
export default class HelloWorld extends Mod {
    private helloWorld;
    private helloLeftHand;
    private helloRightHand;
    private helloTerrain;
    onLoad(saveData: any): void;
    onUnload(): void;
    onGameStart(isLoadingSave: boolean, playedCount: number): void;
    onItemEquip(item: IItem, slot: EquipType): void;
    onMove(nextX: number, nextY: number, tile: ITile, direction: FacingDirection): boolean | undefined;
}
