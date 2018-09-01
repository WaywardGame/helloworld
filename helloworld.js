var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "Enums", "item/Items", "language/IMessages", "mod/IHookHost", "mod/Mod", "mod/ModRegistry", "tile/Terrains", "utilities/TileHelpers"], function (require, exports, Enums_1, Items_1, IMessages_1, IHookHost_1, Mod_1, ModRegistry_1, Terrains_1, TileHelpers_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class HelloWorld extends Mod_1.default {
        onLoad() {
            this.getLog().info("Hello World!");
            Items_1.default[Enums_1.ItemType.Branch].prefix = "a ";
            Items_1.default[Enums_1.ItemType.Branch].name = "greetings stick";
        }
        onUnload() {
            this.getLog().info("Goodbye World!");
        }
        onGameScreenVisible() {
            localPlayer.messages.type(IMessages_1.MessageType.Good)
                .send(this.messageHelloWorld);
        }
        onItemEquip(player, item, slot) {
            if (item.type !== Enums_1.ItemType.Branch) {
                return;
            }
            player.messages.send(slot === Enums_1.EquipType.LeftHand ? this.messageHelloLeftHand : this.messageHelloRightHand);
        }
        onMove(player, nextX, nextY, tile, direction) {
            const tileType = TileHelpers_1.default.getType(tile);
            player.messages.type(IMessages_1.MessageType.Stat)
                .send(this.messageHelloTerrain, Terrains_1.default[tileType].name);
            return undefined;
        }
    }
    __decorate([
        ModRegistry_1.default.message("HelloWorld")
    ], HelloWorld.prototype, "messageHelloWorld", void 0);
    __decorate([
        ModRegistry_1.default.message("HelloLeftHand")
    ], HelloWorld.prototype, "messageHelloLeftHand", void 0);
    __decorate([
        ModRegistry_1.default.message("HelloRightHand")
    ], HelloWorld.prototype, "messageHelloRightHand", void 0);
    __decorate([
        ModRegistry_1.default.message("HelloTerrain")
    ], HelloWorld.prototype, "messageHelloTerrain", void 0);
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVsbG9Xb3JsZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkhlbGxvV29ybGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0lBWUEsTUFBcUIsVUFBVyxTQUFRLGFBQUc7UUFrQm5DLE1BQU07WUFDWixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBR25DLGVBQUssQ0FBQyxnQkFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDckMsZUFBSyxDQUFDLGdCQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDO1FBQ2pELENBQUM7UUFLTSxRQUFRO1lBQ2QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7UUFZTSxtQkFBbUI7WUFFekIsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsdUJBQVcsQ0FBQyxJQUFJLENBQUM7aUJBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNoQyxDQUFDO1FBV00sV0FBVyxDQUFDLE1BQWUsRUFBRSxJQUFXLEVBQUUsSUFBZTtZQUUvRCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssZ0JBQVEsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2xDLE9BQU87YUFDUDtZQUlELE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxpQkFBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUM1RyxDQUFDO1FBZ0JNLE1BQU0sQ0FBQyxNQUFlLEVBQUUsS0FBYSxFQUFFLEtBQWEsRUFBRSxJQUFXLEVBQUUsU0FBb0I7WUFDN0YsTUFBTSxRQUFRLEdBQUcscUJBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFHM0MsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsdUJBQVcsQ0FBQyxJQUFJLENBQUM7aUJBR3BDLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsa0JBQW1CLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFckUsT0FBTyxTQUFTLENBQUM7UUFDbEIsQ0FBQztLQUNEO0lBdkZBO1FBREMscUJBQVEsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO3lEQUNZO0lBRTNDO1FBREMscUJBQVEsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDOzREQUNZO0lBRTlDO1FBREMscUJBQVEsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUM7NkRBQ1k7SUFFL0M7UUFEQyxxQkFBUSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUM7MkRBQ1k7SUE4QjdDO1FBREMsc0JBQVU7eURBS1Y7SUFXRDtRQURDLHNCQUFVO2lEQVVWO0lBZ0JEO1FBREMsc0JBQVU7NENBV1Y7SUE3RkYsNkJBOEZDIn0=