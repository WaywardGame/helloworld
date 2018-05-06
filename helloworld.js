var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "Enums", "item/Items", "language/IMessages", "mod/Mod", "tile/Terrains", "utilities/TileHelpers"], function (require, exports, Enums_1, Items_1, IMessages_1, Mod_1, Terrains_1, TileHelpers_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let log;
    class HelloWorld extends Mod_1.default {
        onInitialize() {
            this.dictionary = this.addDictionary("HelloWorld", HelloWorldDictionary);
            log = this.getLog();
        }
        onLoad(saveData) {
            log.info("Hello World!");
        }
        onUnload() {
            log.info("Goodbye World!");
        }
        onGameStart(isLoadingSave, playedCount) {
            ui.displayMessage(localPlayer, languageManager.getTranslationString(this.dictionary, HelloWorldDictionary.HelloWorld), IMessages_1.MessageType.Good);
            Items_1.default[Enums_1.ItemType.Branch].prefix = "a ";
            Items_1.default[Enums_1.ItemType.Branch].name = "greetings stick";
        }
        onItemEquip(player, item, slot) {
            if (item.type === Enums_1.ItemType.Branch) {
                if (slot === Enums_1.EquipType.LeftHand) {
                    ui.displayMessage(localPlayer, languageManager.getTranslationString(this.dictionary, HelloWorldDictionary.HelloLeftHand), IMessages_1.MessageType.None);
                }
                else {
                    ui.displayMessage(localPlayer, languageManager.getTranslationString(this.dictionary, HelloWorldDictionary.HelloRightHand), IMessages_1.MessageType.None);
                }
            }
        }
        onMove(player, nextX, nextY, tile, direction) {
            const getTile = game.getTile(localPlayer.x, localPlayer.y, localPlayer.z);
            const tileType = TileHelpers_1.default.getType(getTile);
            ui.displayMessage(localPlayer, languageManager.getTranslationString(this.dictionary, HelloWorldDictionary.HelloTerrain), IMessages_1.MessageType.Stat, Terrains_1.default[tileType].name);
            return undefined;
        }
    }
    __decorate([
        Mod_1.HookMethod
    ], HelloWorld.prototype, "onGameStart", null);
    __decorate([
        Mod_1.HookMethod
    ], HelloWorld.prototype, "onItemEquip", null);
    __decorate([
        Mod_1.HookMethod
    ], HelloWorld.prototype, "onMove", null);
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