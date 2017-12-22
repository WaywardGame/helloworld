define(["require", "exports", "Enums", "item/Items", "language/Messages", "mod/Mod", "tile/Terrains", "Utilities"], function (require, exports, Enums_1, Items_1, Messages_1, Mod_1, Terrains_1, Utilities) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class HelloWorld extends Mod_1.default {
        onInitialize() {
            this.dictionary = this.addDictionary("HelloWorld", HelloWorldDictionary);
        }
        onLoad(saveData) {
            console.log("Hello World!");
        }
        onUnload() {
            console.log("Goodbye World!");
        }
        onGameStart(isLoadingSave, playedCount) {
            ui.displayMessage(localPlayer, languageManager.getTranslationString(this.dictionary, HelloWorldDictionary.HelloWorld), Messages_1.MessageType.Good);
            Items_1.default[Enums_1.ItemType.Branch].prefix = "a ";
            Items_1.default[Enums_1.ItemType.Branch].name = "greetings stick";
        }
        onItemEquip(player, item, slot) {
            if (item.type === Enums_1.ItemType.Branch) {
                if (slot === Enums_1.EquipType.LeftHand) {
                    ui.displayMessage(localPlayer, languageManager.getTranslationString(this.dictionary, HelloWorldDictionary.HelloLeftHand), Messages_1.MessageType.None);
                }
                else {
                    ui.displayMessage(localPlayer, languageManager.getTranslationString(this.dictionary, HelloWorldDictionary.HelloRightHand), Messages_1.MessageType.None);
                }
            }
        }
        onMove(player, nextX, nextY, tile, direction) {
            const getTile = game.getTile(localPlayer.x, localPlayer.y, localPlayer.z);
            const tileType = Utilities.TileHelpers.getType(getTile);
            ui.displayMessage(localPlayer, languageManager.getTranslationString(this.dictionary, HelloWorldDictionary.HelloTerrain), Messages_1.MessageType.Stat, Terrains_1.default[tileType].name);
            return undefined;
        }
    }
    exports.default = HelloWorld;
    var HelloWorldDictionary;
    (function (HelloWorldDictionary) {
        HelloWorldDictionary[HelloWorldDictionary["HelloWorld"] = 0] = "HelloWorld";
        HelloWorldDictionary[HelloWorldDictionary["HelloLeftHand"] = 1] = "HelloLeftHand";
        HelloWorldDictionary[HelloWorldDictionary["HelloRightHand"] = 2] = "HelloRightHand";
        HelloWorldDictionary[HelloWorldDictionary["HelloTerrain"] = 3] = "HelloTerrain";
    })(HelloWorldDictionary || (HelloWorldDictionary = {}));
});
//# sourceMappingURL=HelloWorld.js.map