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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVsbG9Xb3JsZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkhlbGxvV29ybGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0lBYUEsSUFBSSxHQUFRLENBQUM7SUFFYixNQUFxQixVQUFXLFNBQVEsYUFBRztRQUduQyxZQUFZO1lBQ2xCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztZQUN6RSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3JCLENBQUM7UUFFTSxNQUFNLENBQUMsUUFBYTtZQUMxQixHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzFCLENBQUM7UUFFTSxRQUFRO1lBQ2QsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzVCLENBQUM7UUFLTSxtQkFBbUI7WUFDekIsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsdUJBQVcsQ0FBQyxJQUFJLENBQUM7aUJBQ3pDLElBQUksQ0FBQyxJQUFJLHFCQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ2hGLGVBQUssQ0FBQyxnQkFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDckMsZUFBSyxDQUFDLGdCQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDO1FBQ2pELENBQUM7UUFHTSxXQUFXLENBQUMsTUFBZSxFQUFFLElBQVcsRUFBRSxJQUFlO1lBQy9ELElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxnQkFBUSxDQUFDLE1BQU0sRUFBRTtnQkFDbEMsSUFBSSxJQUFJLEtBQUssaUJBQVMsQ0FBQyxRQUFRLEVBQUU7b0JBQ2hDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUkscUJBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7aUJBRWpHO3FCQUFNO29CQUNOLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUkscUJBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7aUJBQ2xHO2FBQ0Q7UUFDRixDQUFDO1FBR00sTUFBTSxDQUFDLE1BQWUsRUFBRSxLQUFhLEVBQUUsS0FBYSxFQUFFLElBQVcsRUFBRSxTQUFvQjtZQUM3RixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUUsTUFBTSxRQUFRLEdBQUcscUJBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDOUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsdUJBQVcsQ0FBQyxJQUFJLENBQUM7aUJBQ3BDLElBQUksQ0FBQyxJQUFJLHFCQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsa0JBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3pHLE9BQU8sU0FBUyxDQUFDO1FBQ2xCLENBQUM7S0FDRDtJQTNCQTtRQURDLHNCQUFVO3lEQU1WO0lBR0Q7UUFEQyxzQkFBVTtpREFVVjtJQUdEO1FBREMsc0JBQVU7NENBT1Y7SUE3Q0YsNkJBOENDO0lBRUQsSUFBSyxvQkFLSjtJQUxELFdBQUssb0JBQW9CO1FBQ3hCLDJFQUFVLENBQUE7UUFDVixpRkFBYSxDQUFBO1FBQ2IsbUZBQWMsQ0FBQTtRQUNkLCtFQUFZLENBQUE7SUFDYixDQUFDLEVBTEksb0JBQW9CLEtBQXBCLG9CQUFvQixRQUt4QiJ9