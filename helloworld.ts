import { Direction, EquipType, ItemType } from "Enums";
import { IItem } from "item/IItem";
import Message from "language/dictionary/Message";
import { HookMethod } from "mod/IHookHost";
import Mod from "mod/Mod";
import Register from "mod/ModRegistry";
import { IPlayer } from "player/IPlayer";
import { MessageType } from "player/MessageManager";
import { ITile } from "tile/ITerrain";
import TileHelpers from "utilities/TileHelpers";

export default class HelloWorld extends Mod {

	////////////////////////////////////
	// Registrations
	//

	@Register.message("HelloWorld")
	public readonly messageHelloWorld: Message;
	@Register.message("HelloLeftHand")
	public readonly messageHelloLeftHand: Message;
	@Register.message("HelloRightHand")
	public readonly messageHelloRightHand: Message;
	@Register.message("HelloTerrain")
	public readonly messageHelloTerrain: Message;

	/**
	 * Executed when a save is loaded.
	 */
	public onLoad(): void {
		this.getLog().info("Hello World!");
	}

	/**
	 * Executed when a save is unloaded.
	 */
	public onUnload(): void {
		this.getLog().info("Goodbye World!");
	}

	////////////////////////////////////
	// Hooks
	//

	/**
	 * Executed when the game screen becomes visible. At this point, messages can be sent.
	 * 
	 * For more information on this hook, see: https://waywardgame.github.io/modules/ihookhost.html#ongamescreenvisible
	 */
	@HookMethod
	public onGameScreenVisible() {
		// we send a "hello world" message to the local player, using the "good" type (green)
		localPlayer.messages.type(MessageType.Good)
			.send(this.messageHelloWorld);
	}

	/**
	 * Executed when a player equips an item.
	 * @param player The player that equipped an item.
	 * @param item The item that was equipped.
	 * @param slot The slot the item was equipped to.
	 * 
	 * For more information on this hook, see: https://waywardgame.github.io/modules/ihookhost.html#onitemequip
	 */
	@HookMethod
	public onItemEquip(player: IPlayer, item: IItem, slot: EquipType) {
		// if the item that is being equipped is *not*, a "greetings stick", we're not going to touch it
		if (item.type !== ItemType.Branch) {
			return;
		}

		// we changed the branch item to be called the "greetings stick", now let's add some extra functionality to it
		// we send the player a message, saying hello to whichever hand the branch was equipped to
		player.messages.send(slot === EquipType.LeftHand ? this.messageHelloLeftHand : this.messageHelloRightHand);
	}

	/**
	 * Called when a player moves.
	 * @param player The player that moved.
	 * @param nextX The new `x` position of the player.
	 * @param nextY The new `y` position of the player.
	 * @param tile The tile that the player is moving to.
	 * @param direction The direction the player is moving in.
	 * 
	 * @returns `false` to cancel the movement, or `undefined` to allow the game (or other mods) to decide. 
	 * Our implementation always returns `undefined` — we just want to do some stuff when a player moves, not cancel it.
	 * 
	 * For more information on this hook, see: https://waywardgame.github.io/modules/ihookhost.html#onmove
	 */
	@HookMethod
	public onMove(player: IPlayer, nextX: number, nextY: number, tile: ITile, direction: Direction): boolean | undefined {
		const tileType = TileHelpers.getType(tile);

		// we send a message to this player with the type "stat" (orange)
		player.messages.type(MessageType.Stat)
			// we first list which message we're sending, then we list all the arguments we're giving to that message.
			// in this case, the only argument we're giving it is the name of the tile we're standing on
			.send(this.messageHelloTerrain, tileType);

		return undefined;
	}
}
