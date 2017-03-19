import { EquipType, FacingDirection, ItemType } from "Enums";
import { IItem } from "item/IItem";
import Items from "item/Items";
import { MessageType } from "language/Messages";
import Mod from "mod/Mod";
import { ITile } from "tile/ITerrain";
import Terrains from "tile/Terrains";
import * as Utilities from "Utilities";

export default class HelloWorld extends Mod {
	private helloWorld: number;
	private helloLeftHand: number;
	private helloRightHand: number;
	private helloTerrain: number;

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

	// Hooks
	public onGameStart(isLoadingSave: boolean, playedCount: number): void {
		ui.displayMessage(localPlayer, this.helloWorld, MessageType.Good);
		Items[ItemType.Branch].prefix = "a ";
		Items[ItemType.Branch].name = "greetings stick";
	}

	public onItemEquip(item: IItem, slot: EquipType): void {
		if (item.type === ItemType.Branch) {
			if (slot === EquipType.LeftHand) {
				ui.displayMessage(localPlayer, this.helloLeftHand, MessageType.None);
			} else {
				ui.displayMessage(localPlayer, this.helloRightHand, MessageType.None);
			}
		}
	}

	public onMove(nextX: number, nextY: number, tile: ITile, direction: FacingDirection): boolean | undefined {
		const getTile = game.getTile(localPlayer.x, localPlayer.y, localPlayer.z);
		const tileType = Utilities.TileHelpers.getType(getTile);
		ui.displayMessage(localPlayer, this.helloTerrain, MessageType.Stat, Terrains[tileType].name);
		return undefined;
	}
}
