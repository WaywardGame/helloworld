/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
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
            this.log.info("Hello World!");
        }
        onUnload() {
            this.log.info("Goodbye World!");
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
    exports.default = HelloWorld;
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVsbG9Xb3JsZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9IZWxsb1dvcmxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7R0FTRzs7Ozs7Ozs7OztJQWVILE1BQXFCLFVBQVcsU0FBUSxhQUFHO1FBa0IxQixNQUFNO1lBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQy9CLENBQUM7UUFLZSxRQUFRO1lBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDakMsQ0FBQztRQVlNLG1CQUFtQjtZQUV6QixXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyw2QkFBVyxDQUFDLElBQUksQ0FBQztpQkFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7UUFXTSxXQUFXLENBQUMsTUFBYyxFQUFFLElBQVUsRUFBRSxJQUFlO1lBRTdELElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxnQkFBUSxDQUFDLE1BQU0sRUFBRTtnQkFDbEMsT0FBTzthQUNQO1lBSUQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLGtCQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQzFHLENBQUM7UUFjTSxNQUFNLENBQUMsTUFBYyxFQUFFLFFBQWMsRUFBRSxJQUFVO1lBQ3ZELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFHM0IsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsNkJBQVcsQ0FBQyxJQUFJLENBQUM7aUJBR3BDLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFFM0MsT0FBTyxTQUFTLENBQUM7UUFDbEIsQ0FBQztLQUNEO0lBeEZELDZCQXdGQztJQWpGZ0I7UUFEZixxQkFBUSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7eURBQ1k7SUFFM0I7UUFEZixxQkFBUSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUM7NERBQ1k7SUFFOUI7UUFEZixxQkFBUSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUM7MkRBQ1k7SUFFN0I7UUFEZixxQkFBUSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUM7MkRBQ1k7SUEwQnRDO1FBRE4sSUFBQSwyQkFBWSxFQUFDLG9CQUFVLEVBQUUsTUFBTSxDQUFDO3lEQUtoQztJQVdNO1FBRE4sSUFBQSwyQkFBWSxFQUFDLHFCQUFRLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztpREFVdkM7SUFjTTtRQUROLElBQUEsMkJBQVksRUFBQyxxQkFBUSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUM7NENBV3pDIn0=