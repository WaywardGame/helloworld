/// <reference path="mod-reference/modreference.d.ts"/>

class Mod extends Mods.Mod {
	private helloWorld: number;
	private helloLeftHand: number;
	private helloRightHand: number;
	private helloTerrain: number;

	public onInitialize(saveDataGlobal: any): any {
	}

	public onLoad(saveData: any): void {
		console.log("Hello World!");
		this.helloWorld = this.addMessage("HelloWorld", "Hello World!");
		this.helloLeftHand = this.addMessage("HelloLeftHand", "Hello Left Hand!");
		this.helloRightHand = this.addMessage("HelloRightHand", "Hello Right Hand!");
		this.helloTerrain = this.addMessage("HelloTerrain", "Hello _0_!");
	}

	public onUnload(): void {
		console.log("Goodbye World!");
	}

	public onSave(): any {
	}

	// Hooks
	public onGameStart(isLoadingSave: boolean, playedCount: number): void {
		ui.displayMessage(this.helloWorld, MessageType.Good);
		Item.defines[ItemType.Branch].name = "A Greetings Stick";
	}

	public onItemEquip(item: Item.IItem, slot: EquipType): void {
		if (item.type === ItemType.Branch) {
			if (slot === EquipType.LeftHand) {
				ui.displayMessage(this.helloLeftHand, MessageType.None);
			} else {
				ui.displayMessage(this.helloRightHand, MessageType.None);
			}
		}
	}

	public onMove(nextX: number, nextY: number, tile: ITile, direction: FacingDirection): boolean {
		var getTile = game.getTile(player.x, player.y, player.z);
		var tileType = Utilities.TileHelpers.getType(getTile);
		ui.displayMessage(this.helloTerrain, MessageType.Stat, terrains[tileType].name);
		return undefined;
	}
}
