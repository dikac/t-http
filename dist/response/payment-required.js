import DefaultMessage from "./default-message";
export default function PaymentRequired(response = {}) {
    return DefaultMessage(Object.assign(Object.assign({}, response), { code: 402 }));
}
//# sourceMappingURL=payment-required.js.map