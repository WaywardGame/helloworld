var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "Enums", "item/Items", "language/IMessages", "language/Translation", "mod/IHookHost", "mod/Mod", "tile/Terrains", "utilities/TileHelpers"], function (require, exports, Enums_1, Items_1, IMessages_1, Translation_1, IHookHost_1, Mod_1, Terrains_1, TileHelpers_1) {
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
        onGameScreenVisible() {
            localPlayer.messages.type(IMessages_1.MessageType.Good)
                .send(new Translation_1.default(this.dictionary, HelloWorldDictionary.HelloWorld).get());
            Items_1.default[Enums_1.ItemType.Branch].prefix = "a ";
            Items_1.default[Enums_1.ItemType.Branch].name = "greetings stick";
        }
        onItemEquip(player, item, slot) {
            if (item.type === Enums_1.ItemType.Branch) {
                if (slot === Enums_1.EquipType.LeftHand) {
                    player.messages.send(new Translation_1.default(this.dictionary, HelloWorldDictionary.HelloLeftHand).get());
                }
                else {
                    player.messages.send(new Translation_1.default(this.dictionary, HelloWorldDictionary.HelloRightHand).get());
                }
            }
        }
        onMove(player, nextX, nextY, tile, direction) {
            const getTile = game.getTile(localPlayer.x, localPlayer.y, localPlayer.z);
            const tileType = TileHelpers_1.default.getType(getTile);
            player.messages.type(IMessages_1.MessageType.Stat)
                .send(new Translation_1.default(this.dictionary, HelloWorldDictionary.HelloTerrain).get(Terrains_1.default[tileType].name));
            return undefined;
        }
    }
    __decorate([
        IHookHost_1.HookMethod
    ], HelloWorld.prototype, "onGameScreenVisible", null);
    __decorate([
        IHookHost_1.HookMethod
    ], HelloWorld.prototype, "onItemEquip", null);
    __decorate([
        IHookHost_1.HookMethod
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVsbG9Xb3JsZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkhlbGxvV29ybGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0lBYUEsSUFBSSxHQUFRLENBQUM7SUFFYixnQkFBZ0MsU0FBUSxhQUFHO1FBR25DLFlBQVk7WUFDbEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1lBQ3pFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDckIsQ0FBQztRQUVNLE1BQU0sQ0FBQyxRQUFhO1lBQzFCLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDMUIsQ0FBQztRQUVNLFFBQVE7WUFDZCxHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDNUIsQ0FBQztRQUtNLG1CQUFtQjtZQUN6QixXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyx1QkFBVyxDQUFDLElBQUksQ0FBQztpQkFDekMsSUFBSSxDQUFDLElBQUkscUJBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDaEYsZUFBSyxDQUFDLGdCQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNyQyxlQUFLLENBQUMsZ0JBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLENBQUM7UUFDakQsQ0FBQztRQUdNLFdBQVcsQ0FBQyxNQUFlLEVBQUUsSUFBVyxFQUFFLElBQWU7WUFDL0QsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLGdCQUFRLENBQUMsTUFBTSxFQUFFO2dCQUNsQyxJQUFJLElBQUksS0FBSyxpQkFBUyxDQUFDLFFBQVEsRUFBRTtvQkFDaEMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxxQkFBVyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsb0JBQW9CLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztpQkFFakc7cUJBQU07b0JBQ04sTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxxQkFBVyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsb0JBQW9CLENBQUMsY0FBYyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztpQkFDbEc7YUFDRDtRQUNGLENBQUM7UUFHTSxNQUFNLENBQUMsTUFBZSxFQUFFLEtBQWEsRUFBRSxLQUFhLEVBQUUsSUFBVyxFQUFFLFNBQW9CO1lBQzdGLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxRSxNQUFNLFFBQVEsR0FBRyxxQkFBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM5QyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyx1QkFBVyxDQUFDLElBQUksQ0FBQztpQkFDcEMsSUFBSSxDQUFDLElBQUkscUJBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxrQkFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDekcsT0FBTyxTQUFTLENBQUM7UUFDbEIsQ0FBQztLQUNEO0lBM0JBO1FBREMsc0JBQVU7eURBTVY7SUFHRDtRQURDLHNCQUFVO2lEQVVWO0lBR0Q7UUFEQyxzQkFBVTs0Q0FPVjtJQTdDRiw2QkE4Q0M7SUFFRCxJQUFLLG9CQUtKO0lBTEQsV0FBSyxvQkFBb0I7UUFDeEIsMkVBQVUsQ0FBQTtRQUNWLGlGQUFhLENBQUE7UUFDYixtRkFBYyxDQUFBO1FBQ2QsK0VBQVksQ0FBQTtJQUNiLENBQUMsRUFMSSxvQkFBb0IsS0FBcEIsb0JBQW9CLFFBS3hCIn0=