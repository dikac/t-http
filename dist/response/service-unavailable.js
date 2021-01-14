import DefaultMessage from "./default-message";
export default function ServiceUnavailable(response = {}) {
    return DefaultMessage(Object.assign(Object.assign({}, response), { code: 503 }));
}
//# sourceMappingURL=service-unavailable.js.map