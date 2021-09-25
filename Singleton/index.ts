// index.ts
import { Logger } from "./Logger";
import { Payment } from "./Payment";
// Recupere a instância Logger
const myLogger: Logger = Logger.getInstance();
myLogger.log("Starting the payment processor app.");
console.log("Log count: " + myLogger.count.toString());
const myPayment: Payment = new Payment();
myPayment.process(100);
console.log(
  "Número total de mensagens registradas: " + myLogger.count.toString()
);
