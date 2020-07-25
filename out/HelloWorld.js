var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "entity/IHuman", "entity/player/IMessageManager", "item/IItem", "mod/IHookHost", "mod/Mod", "mod/ModRegistry", "utilities/TileHelpers"], function (require, exports, IHuman_1, IMessageManager_1, IItem_1, IHookHost_1, Mod_1, ModRegistry_1, TileHelpers_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class HelloWorld extends Mod_1.default {
        onLoad() {
            this.getLog().info("Hello World!");
        }
        onUnload() {
            this.getLog().info("Goodbye World!");
        }
        onGameScreenVisible() {
            localPlayer.messages.type(IMessageManager_1.MessageType.Good)
                .send(this.messageHelloWorld);
        }
        onItemEquip(player, item, slot) {
            if (item.type !== IItem_1.ItemType.Branch) {
                return;
            }
            player.messages.send(slot === IHuman_1.EquipType.LeftHand ? this.messageHelloLeftHand : this.messageHelloRightHand);
        }
        onMove(player, nextX, nextY, tile, direction) {
            const tileType = TileHelpers_1.default.getType(tile);
            player.messages.type(IMessageManager_1.MessageType.Stat)
                .send(this.messageHelloTerrain, tileType);
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
        Override
    ], HelloWorld.prototype, "onLoad", null);
    __decorate([
        Override
    ], HelloWorld.prototype, "onUnload", null);
    __decorate([
        Override,
        IHookHost_1.HookMethod
    ], HelloWorld.prototype, "onGameScreenVisible", null);
    __decorate([
        Override,
        IHookHost_1.HookMethod
    ], HelloWorld.prototype, "onItemEquip", null);
    __decorate([
        Override,
        IHookHost_1.HookMethod
    ], HelloWorld.prototype, "onMove", null);
    exports.default = HelloWorld;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVsbG9Xb3JsZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL0hlbGxvV29ybGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0lBYUEsTUFBcUIsVUFBVyxTQUFRLGFBQUc7UUFrQnpCLE1BQU07WUFDdEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNwQyxDQUFDO1FBS2dCLFFBQVE7WUFDeEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7UUFZTSxtQkFBbUI7WUFFekIsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsNkJBQVcsQ0FBQyxJQUFJLENBQUM7aUJBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNoQyxDQUFDO1FBV00sV0FBVyxDQUFDLE1BQWMsRUFBRSxJQUFVLEVBQUUsSUFBZTtZQUU3RCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssZ0JBQVEsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2xDLE9BQU87YUFDUDtZQUlELE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxrQkFBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUM1RyxDQUFDO1FBZ0JNLE1BQU0sQ0FBQyxNQUFjLEVBQUUsS0FBYSxFQUFFLEtBQWEsRUFBRSxJQUFXLEVBQUUsU0FBb0I7WUFDNUYsTUFBTSxRQUFRLEdBQUcscUJBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFHM0MsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsNkJBQVcsQ0FBQyxJQUFJLENBQUM7aUJBR3BDLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFFM0MsT0FBTyxTQUFTLENBQUM7UUFDbEIsQ0FBQztLQUNEO0lBbkZBO1FBREMscUJBQVEsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO3lEQUNZO0lBRTNDO1FBREMscUJBQVEsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDOzREQUNZO0lBRTlDO1FBREMscUJBQVEsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUM7NkRBQ1k7SUFFL0M7UUFEQyxxQkFBUSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUM7MkRBQ1k7SUFLbkM7UUFBVCxRQUFROzRDQUVSO0lBS1M7UUFBVCxRQUFROzhDQUVSO0lBWUQ7UUFEQyxRQUFRO1FBQUUsc0JBQVU7eURBS3BCO0lBV0Q7UUFEQyxRQUFRO1FBQUUsc0JBQVU7aURBVXBCO0lBZ0JEO1FBREMsUUFBUTtRQUFFLHNCQUFVOzRDQVdwQjtJQXpGRiw2QkEwRkMifQ==