var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "event/EventBuses", "event/EventManager", "game/entity/IHuman", "game/entity/player/IMessageManager", "game/item/IItem", "mod/Mod", "mod/ModRegistry", "ui/screen/screens/GameScreen"], function (require, exports, EventBuses_1, EventManager_1, IHuman_1, IMessageManager_1, IItem_1, Mod_1, ModRegistry_1, GameScreen_1) {
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
            player.messages.send(slot === IHuman_1.EquipType.MainHand ? this.messageHelloMainHand : this.messageHelloOffHand);
        }
        onMove(player, fromTile, tile) {
            const tileType = tile.type;
            player.messages.type(IMessageManager_1.MessageType.Stat)
                .send(this.messageHelloTerrain, tileType);
            return undefined;
        }
    }
    __decorate([
        ModRegistry_1.default.message("HelloWorld")
    ], HelloWorld.prototype, "messageHelloWorld", void 0);
    __decorate([
        ModRegistry_1.default.message("HelloMainHand")
    ], HelloWorld.prototype, "messageHelloMainHand", void 0);
    __decorate([
        ModRegistry_1.default.message("HelloOffHand")
    ], HelloWorld.prototype, "messageHelloOffHand", void 0);
    __decorate([
        ModRegistry_1.default.message("HelloTerrain")
    ], HelloWorld.prototype, "messageHelloTerrain", void 0);
    __decorate([
        (0, EventManager_1.EventHandler)(GameScreen_1.default, "show")
    ], HelloWorld.prototype, "onGameScreenVisible", null);
    __decorate([
        (0, EventManager_1.EventHandler)(EventBuses_1.EventBus.Players, "equip")
    ], HelloWorld.prototype, "onItemEquip", null);
    __decorate([
        (0, EventManager_1.EventHandler)(EventBuses_1.EventBus.Players, "preMove")
    ], HelloWorld.prototype, "onMove", null);
    exports.default = HelloWorld;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVsbG9Xb3JsZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9IZWxsb1dvcmxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztJQWFBLE1BQXFCLFVBQVcsU0FBUSxhQUFHO1FBa0IxQixNQUFNO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDcEMsQ0FBQztRQUtlLFFBQVE7WUFDdkIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7UUFZTSxtQkFBbUI7WUFFekIsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsNkJBQVcsQ0FBQyxJQUFJLENBQUM7aUJBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNoQyxDQUFDO1FBV00sV0FBVyxDQUFDLE1BQWMsRUFBRSxJQUFVLEVBQUUsSUFBZTtZQUU3RCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssZ0JBQVEsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2xDLE9BQU87YUFDUDtZQUlELE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxrQkFBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUMxRyxDQUFDO1FBY00sTUFBTSxDQUFDLE1BQWMsRUFBRSxRQUFjLEVBQUUsSUFBVTtZQUN2RCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBRzNCLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLDZCQUFXLENBQUMsSUFBSSxDQUFDO2lCQUdwQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBRTNDLE9BQU8sU0FBUyxDQUFDO1FBQ2xCLENBQUM7S0FDRDtJQWpGZ0I7UUFEZixxQkFBUSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7eURBQ1k7SUFFM0I7UUFEZixxQkFBUSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUM7NERBQ1k7SUFFOUI7UUFEZixxQkFBUSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUM7MkRBQ1k7SUFFN0I7UUFEZixxQkFBUSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUM7MkRBQ1k7SUEwQnRDO1FBRE4sSUFBQSwyQkFBWSxFQUFDLG9CQUFVLEVBQUUsTUFBTSxDQUFDO3lEQUtoQztJQVdNO1FBRE4sSUFBQSwyQkFBWSxFQUFDLHFCQUFRLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztpREFVdkM7SUFjTTtRQUROLElBQUEsMkJBQVksRUFBQyxxQkFBUSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUM7NENBV3pDO0lBdkZGLDZCQXdGQyJ9