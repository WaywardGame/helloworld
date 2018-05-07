import { EquipType, FacingDirection, ItemType } from "Enums";
import { IItem } from "item/IItem";
import Items from "item/Items";
import { MessageType } from "language/IMessages";
import { HookMethod } from "mod/IHookHost";
import Mod from "mod/Mod";
import { IPlayer } from "player/IPlayer";
import { ITile } from "tile/ITerrain";
import Terrains from "tile/Terrains";
import Log, { Source } from "utilities/Log";
import TileHelpers from "utilities/TileHelpers";

let log: Log;

export default class HelloWorld extends Mod {
	private dictionary: number;

	public onInitialize(): void {
		this.dictionary = this.addDictionary("HelloWorld", HelloWorldDictionary);
		log = this.getLog();
	}

	public onLoad(saveData: any): void {
		log.info("Hello World!");
	}

	public onUnload(): void {
		log.info("Goodbye World!");
	}

	// Hooks

	@HookMethod
	public onGameStart(isLoadingSave: boolean, playedCount: number): void {
		ui.displayMessage(localPlayer, languageManager.getTranslationString(this.dictionary, HelloWorldDictionary.HelloWorld), MessageType.Good);
		Items[ItemType.Branch].prefix = "a ";
		Items[ItemType.Branch].name = "greetings stick";
	}

	@HookMethod
	public onItemEquip(player: IPlayer, item: IItem, slot: EquipType): void {
		if (item.type === ItemType.Branch) {
			if (slot === EquipType.LeftHand) {
				ui.displayMessage(localPlayer, languageManager.getTranslationString(this.dictionary, HelloWorldDictionary.HelloLeftHand), MessageType.None);

			} else {
				ui.displayMessage(localPlayer, languageManager.getTranslationString(this.dictionary, HelloWorldDictionary.HelloRightHand), MessageType.None);
			}
		}
	}

	@HookMethod
	public onMove(player: IPlayer, nextX: number, nextY: number, tile: ITile, direction: FacingDirection): boolean | undefined {
		const getTile = game.getTile(localPlayer.x, localPlayer.y, localPlayer.z);
		const tileType = TileHelpers.getType(getTile);
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
