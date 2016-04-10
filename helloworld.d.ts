/// <reference path="mod-reference/modreference.d.ts" />
declare class Mod extends Mods.Mod {
    private helloWorld;
    private helloLeftHand;
    private helloRightHand;
    private helloTerrain;
    onInitialize(saveDataGlobal: any): any;
    onLoad(saveData: any): void;
    onUnload(): void;
    onSave(): any;
    onGameStart(isLoadingSave: boolean, playedCount: number): void;
    onItemEquip(item: Item.IItem, slot: EquipType): void;
    onMove(nextX: number, nextY: number, tile: ITile, direction: FacingDirection): boolean;
}
