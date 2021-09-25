"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
// Payment.ts
var Logger_1 = require("./Logger");
var Payment = /** @class */ (function () {
    function Payment() {
        // Retrieve the Singleton instance
        this.paymentLogger = Logger_1.Logger.getInstance();
        this.paymentLogger.log('payment instance constructed');
    }
    Payment.prototype.process = function (amount) {
        this.paymentLogger.log('processing payment: ' + amount.toString());
    };
    return Payment;
}());
exports.Payment = Payment;
