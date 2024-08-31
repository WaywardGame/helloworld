import { EventBus } from "@wayward/game/event/EventBuses";
import { EventHandler } from "@wayward/game/event/EventManager";
import { EquipType } from "@wayward/game/game/entity/IHuman";
import { MessageType } from "@wayward/game/game/entity/player/IMessageManager";
import Player from "@wayward/game/game/entity/player/Player";
import { ItemType } from "@wayward/game/game/item/IItem";
import Item from "@wayward/game/game/item/Item";
import Tile from "@wayward/game/game/tile/Tile";
import Message from "@wayward/game/language/dictionary/Message";
import Mod from "@wayward/game/mod/Mod";
import Register from "@wayward/game/mod/ModRegistry";
import GameScreen from "@wayward/game/ui/screen/screens/GameScreen";

export default class HelloWorld extends Mod {

	////////////////////////////////////
	// Registrations
	//

	@Register.message("HelloWorld")
	public readonly messageHelloWorld: Message;
	@Register.message("HelloMainHand")
	public readonly messageHelloMainHand: Message;
	@Register.message("HelloOffHand")
	public readonly messageHelloOffHand: Message;
	@Register.message("HelloTerrain")
	public readonly messageHelloTerrain: Message;

	/**
	 * Executed when a save is loaded.
	 */
	public override onLoad(): void {
		this.log.info("Hello World!");
	}

	/**
	 * Executed when a save is unloaded.
	 */
	public override onUnload(): void {
		this.log.info("Goodbye World!");
	}

	////////////////////////////////////
	// Event Handlers
	//

	/**
	 * Executed when the game screen becomes visible. At this point, messages can be sent.
	 * 
	 * For more information on this hook, see: https://waywardgame.github.io/modules/ihookhost.html#ongamescreenvisible
	 */
	@EventHandler(GameScreen, "show")
	public onGameScreenVisible(): void {
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
	@EventHandler(EventBus.Players, "equip")
	public onItemEquip(player: Player, item: Item, slot: EquipType): void {
		// if the item that is being equipped is *not*, a "greetings stick", we're not going to touch it
		if (item.type !== ItemType.Branch) {
			return;
		}

		// we changed the branch item to be called the "greetings stick", now let's add some extra functionality to it
		// we send the player a message, saying hello to whichever hand the branch was equipped to
		player.messages.send(slot === EquipType.MainHand ? this.messageHelloMainHand : this.messageHelloOffHand);
	}

	/**
	 * Called when a player moves.
	 * @param player The player that moved.
	 * @param tile The tile that the player is moving to.
	 * @param direction The direction the player is moving in.
	 * 
	 * @returns `false` to cancel the movement, or `undefined` to allow the game (or other mods) to decide. 
	 * Our implementation always returns `undefined` — we just want to do some stuff when a player moves, not cancel it.
	 * 
	 * For more information on this hook, see: https://waywardgame.github.io/modules/ihookhost.html#onmove
	 */
	@EventHandler(EventBus.Players, "preMove")
	public onMove(player: Player, fromTile: Tile, tile: Tile): boolean | void | undefined {
		const tileType = tile.type;

		// we send a message to this player with the type "stat" (orange)
		player.messages.type(MessageType.Stat)
			// we first list which message we're sending, then we list all the arguments we're giving to that message.
			// in this case, the only argument we're giving it is the name of the tile we're standing on
			.send(this.messageHelloTerrain, tileType);

		return undefined;
	}
}
