import StandardCode from "./message/message/standard";
import Standard from "./standard";
export default function PaymentRequired(body, header) {
    return new Standard(402, StandardCode(402), header ? header : {}, body);
}
//# sourceMappingURL=payment-required.js.map