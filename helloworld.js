define(["require", "exports", "Enums", "item/Items", "language/Messages", "mod/Mod", "tile/Terrains", "Utilities"], function (require, exports, Enums_1, Items_1, Messages_1, Mod_1, Terrains_1, Utilities) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class HelloWorld extends Mod_1.default {
        onLoad(saveData) {
            console.log("Hello World!");
            this.helloWorld = this.addMessage("HelloWorld", "Hello World!");
            this.helloLeftHand = this.addMessage("HelloLeftHand", "Hello Left Hand!");
            this.helloRightHand = this.addMessage("HelloRightHand", "Hello Right Hand!");
            this.helloTerrain = this.addMessage("HelloTerrain", "Hello _0_!");
        }
        onUnload() {
            console.log("Goodbye World!");
        }
        onGameStart(isLoadingSave, playedCount) {
            ui.displayMessage(localPlayer, this.helloWorld, Messages_1.MessageType.Good);
            Items_1.default[Enums_1.ItemType.Branch].prefix = "a ";
            Items_1.default[Enums_1.ItemType.Branch].name = "greetings stick";
        }
        onItemEquip(item, slot) {
            if (item.type === Enums_1.ItemType.Branch) {
                if (slot === Enums_1.EquipType.LeftHand) {
                    ui.displayMessage(localPlayer, this.helloLeftHand, Messages_1.MessageType.None);
                }
                else {
                    ui.displayMessage(localPlayer, this.helloRightHand, Messages_1.MessageType.None);
                }
            }
        }
        onMove(nextX, nextY, tile, direction) {
            const getTile = game.getTile(localPlayer.x, localPlayer.y, localPlayer.z);
            const tileType = Utilities.TileHelpers.getType(getTile);
            ui.displayMessage(localPlayer, this.helloTerrain, Messages_1.MessageType.Stat, Terrains_1.default[tileType].name);
            return undefined;
        }
    }
    exports.default = HelloWorld;
});
//# sourceMappingURL=HelloWorld.js.map