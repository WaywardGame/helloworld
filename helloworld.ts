import { EquipType, FacingDirection, ItemType } from "Enums";
import { IItem } from "item/IItem";
import Items from "item/Items";
import { MessageType } from "language/Messages";
import Mod from "mod/Mod";
import { IPlayer } from "player/IPlayer";
import { ITile } from "tile/ITerrain";
import Terrains from "tile/Terrains";
import * as Utilities from "Utilities";
import Button from "newui/util/Button";

export default class HelloWorld extends Mod {
	private dictionary: number;

	public onInitialize(): void {
		this.dictionary = this.addDictionary("HelloWorld", HelloWorldDictionary);
	}

	public onLoad(saveData: any): void {
		console.log("Hello World!");
	}

	public onUnload(): void {
		console.log("Goodbye World!");
	}

	// Hooks
	public onGameStart(isLoadingSave: boolean, playedCount: number): void {
		ui.displayMessage(localPlayer, languageManager.getTranslationString(this.dictionary, HelloWorldDictionary.HelloWorld), MessageType.Good);
		Items[ItemType.Branch].prefix = "a ";
		Items[ItemType.Branch].name = "greetings stick";
	}

	public onItemEquip(player: IPlayer, item: IItem, slot: EquipType): void {
		if (item.type === ItemType.Branch) {
			if (slot === EquipType.LeftHand) {
				ui.displayMessage(localPlayer, languageManager.getTranslationString(this.dictionary, HelloWorldDictionary.HelloLeftHand), MessageType.None);
			} else {
				ui.displayMessage(localPlayer, languageManager.getTranslationString(this.dictionary, HelloWorldDictionary.HelloRightHand), MessageType.None);
			}
		}
	}

	public onMove(player: IPlayer, nextX: number, nextY: number, tile: ITile, direction: FacingDirection): boolean | undefined {
		const getTile = game.getTile(localPlayer.x, localPlayer.y, localPlayer.z);
		const tileType = Utilities.TileHelpers.getType(getTile);
		ui.displayMessage(localPlayer, languageManager.getTranslationString(this.dictionary, HelloWorldDictionary.HelloTerrain), MessageType.Stat, Terrains[tileType].name);
		return undefined;
	}
}

enum HelloWorldDictionary {
	HelloWorld,
	HelloLeftHand,
	HelloRightHand,
	HelloTerrain
}
