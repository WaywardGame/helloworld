var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "entity/IHuman", "entity/player/IMessageManager", "item/IItem", "mod/IHookHost", "mod/Mod", "mod/ModRegistry", "utilities/TileHelpers"], function (require, exports, IHuman_1, IMessageManager_1, IItem_1, IHookHost_1, Mod_1, ModRegistry_1, TileHelpers_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let HelloWorld = (() => {
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
        return HelloWorld;
    })();
    exports.default = HelloWorld;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVsbG9Xb3JsZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL0hlbGxvV29ybGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0lBYUE7UUFBQSxNQUFxQixVQUFXLFNBQVEsYUFBRztZQWtCekIsTUFBTTtnQkFDdEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNwQyxDQUFDO1lBS2dCLFFBQVE7Z0JBQ3hCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUN0QyxDQUFDO1lBWU0sbUJBQW1CO2dCQUV6QixXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyw2QkFBVyxDQUFDLElBQUksQ0FBQztxQkFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQ2hDLENBQUM7WUFXTSxXQUFXLENBQUMsTUFBYyxFQUFFLElBQVUsRUFBRSxJQUFlO2dCQUU3RCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssZ0JBQVEsQ0FBQyxNQUFNLEVBQUU7b0JBQ2xDLE9BQU87aUJBQ1A7Z0JBSUQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLGtCQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQzVHLENBQUM7WUFnQk0sTUFBTSxDQUFDLE1BQWMsRUFBRSxLQUFhLEVBQUUsS0FBYSxFQUFFLElBQVcsRUFBRSxTQUFvQjtnQkFDNUYsTUFBTSxRQUFRLEdBQUcscUJBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRzNDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLDZCQUFXLENBQUMsSUFBSSxDQUFDO3FCQUdwQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUUzQyxPQUFPLFNBQVMsQ0FBQztZQUNsQixDQUFDO1NBQ0Q7UUFuRkE7WUFEQyxxQkFBUSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7NkRBQ1k7UUFFM0M7WUFEQyxxQkFBUSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUM7Z0VBQ1k7UUFFOUM7WUFEQyxxQkFBUSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztpRUFDWTtRQUUvQztZQURDLHFCQUFRLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQzsrREFDWTtRQUtuQztZQUFULFFBQVE7Z0RBRVI7UUFLUztZQUFULFFBQVE7a0RBRVI7UUFZRDtZQURDLFFBQVE7WUFBRSxzQkFBVTs2REFLcEI7UUFXRDtZQURDLFFBQVE7WUFBRSxzQkFBVTtxREFVcEI7UUFnQkQ7WUFEQyxRQUFRO1lBQUUsc0JBQVU7Z0RBV3BCO1FBQ0YsaUJBQUM7U0FBQTtzQkExRm9CLFVBQVUifQ==