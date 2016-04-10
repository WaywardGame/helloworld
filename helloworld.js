var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Mod = (function (_super) {
    __extends(Mod, _super);
    function Mod() {
        _super.apply(this, arguments);
    }
    Mod.prototype.onInitialize = function (saveDataGlobal) {
    };
    Mod.prototype.onLoad = function (saveData) {
        console.log("Hello World!");
        this.helloWorld = this.addMessage("HelloWorld", "Hello World!");
        this.helloLeftHand = this.addMessage("HelloLeftHand", "Hello Left Hand!");
        this.helloRightHand = this.addMessage("HelloRightHand", "Hello Right Hand!");
        this.helloTerrain = this.addMessage("HelloTerrain", "Hello _0_!");
    };
    Mod.prototype.onUnload = function () {
        console.log("Goodbye World!");
    };
    Mod.prototype.onSave = function () {
    };
    Mod.prototype.onGameStart = function (isLoadingSave, playedCount) {
        ui.displayMessage(this.helloWorld, MessageType.Good);
        Item.defines[ItemType.Branch].name = "A Greetings Stick";
    };
    Mod.prototype.onItemEquip = function (item, slot) {
        if (item.type === ItemType.Branch) {
            if (slot === EquipType.LeftHand) {
                ui.displayMessage(this.helloLeftHand, MessageType.None);
            }
            else {
                ui.displayMessage(this.helloRightHand, MessageType.None);
            }
        }
    };
    Mod.prototype.onMove = function (nextX, nextY, tile, direction) {
        var getTile = game.getTile(player.x, player.y, player.z);
        var tileType = Utilities.TileHelpers.getType(getTile);
        ui.displayMessage(this.helloTerrain, MessageType.Stat, terrains[tileType].name);
        return undefined;
    };
    return Mod;
}(Mods.Mod));
//# sourceMappingURL=helloworld.js.map