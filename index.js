"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts
var Logger_1 = require("./Logger");
var Payment_1 = require("./Payment");
var myLogger = new Logger_1.Logger();
myLogger.log('Starting the payment processor app.');
console.log('Log count: ' + myLogger.count.toString());
var myPayment = new Payment_1.Payment();
myPayment.process(100);
console.log('Número total de mensagens registradas: ' + myLogger.count.toString());
