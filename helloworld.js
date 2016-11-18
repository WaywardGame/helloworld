define(["require", "exports"], function (require, exports) {
    "use strict";
    class Mod extends Mods.Mod {
        onInitialize(saveDataGlobal) {
        }
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
        onSave() {
        }
        onGameStart(isLoadingSave, playedCount) {
            ui.displayMessage(this.helloWorld, MessageType.Good);
            Item.defines[ItemType.Branch].prefix = "a ";
            Item.defines[ItemType.Branch].name = "greetings stick";
        }
        onItemEquip(item, slot) {
            if (item.type === ItemType.Branch) {
                if (slot === EquipType.LeftHand) {
                    ui.displayMessage(this.helloLeftHand, MessageType.None);
                }
                else {
                    ui.displayMessage(this.helloRightHand, MessageType.None);
                }
            }
        }
        onMove(nextX, nextY, tile, direction) {
            let getTile = game.getTile(player.x, player.y, player.z);
            let tileType = Utilities.TileHelpers.getType(getTile);
            ui.displayMessage(this.helloTerrain, MessageType.Stat, Terrain.defines[tileType].name);
            return undefined;
        }
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Mod;
});
//# sourceMappingURL=helloworld.js.map