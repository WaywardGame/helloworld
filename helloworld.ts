import { EquipType, FacingDirection, ItemType } from "Enums";
import { IItem } from "item/IItem";
import Items from "item/Items";
import { MessageType } from "language/IMessages";
import Translation from "language/Translation";
import { HookMethod } from "mod/IHookHost";
import Mod from "mod/Mod";
import { IPlayer } from "player/IPlayer";
import { ITile } from "tile/ITerrain";
import Terrains from "tile/Terrains";
import Log from "utilities/Log";
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
	public onGameScreenVisible(): void {
		game.messages.type(MessageType.Good)
			.send(new Translation(this.dictionary, HelloWorldDictionary.HelloWorld).get());
		Items[ItemType.Branch].prefix = "a ";
		Items[ItemType.Branch].name = "greetings stick";
	}

	@HookMethod
	public onItemEquip(player: IPlayer, item: IItem, slot: EquipType): void {
		if (item.type === ItemType.Branch) {
			if (slot === EquipType.LeftHand) {
				game.messages.send(new Translation(this.dictionary, HelloWorldDictionary.HelloLeftHand).get());

			} else {
				game.messages.send(new Translation(this.dictionary, HelloWorldDictionary.HelloRightHand).get());
			}
		}
	}

	@HookMethod
	public onMove(player: IPlayer, nextX: number, nextY: number, tile: ITile, direction: FacingDirection): boolean | undefined {
		const getTile = game.getTile(localPlayer.x, localPlayer.y, localPlayer.z);
		const tileType = TileHelpers.getType(getTile);
		game.messages.type(MessageType.Stat)
			.send(new Translation(this.dictionary, HelloWorldDictionary.HelloTerrain).get(Terrains[tileType].name));
		return undefined;
	}
}

enum HelloWorldDictionary {
	HelloWorld,
	HelloLeftHand,
	HelloRightHand,
	HelloTerrain
}
