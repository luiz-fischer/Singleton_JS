// Payment.ts
import { Logger } from './Logger'
export class Payment {
    private paymentLogger: Logger = new Logger()
    constructor() {
        this.paymentLogger.log('payment instance constructed')
    }
    public process(amount: number) {
        this.paymentLogger.log('processing payment: ' + amount.toString())
    }
}