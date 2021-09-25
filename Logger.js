"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
// Logger.ts
var Logger = /** @class */ (function () {
    function Logger() {
        this.logs = [];
    }
    Object.defineProperty(Logger.prototype, "count", {
        get: function () {
            return this.logs.length;
        },
        enumerable: false,
        configurable: true
    });
    Logger.prototype.log = function (message) {
        var timestamp = new Date().toISOString();
        this.logs.push({ message: message, timestamp: timestamp });
        console.log(timestamp + " - " + message);
    };
    return Logger;
}());
exports.Logger = Logger;
