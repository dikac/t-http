import DefaultMessage from "./default-message";
export default function Conflict(response) {
    return DefaultMessage(Object.assign(Object.assign({}, response), { code: 409 }));
}
//# sourceMappingURL=conflict.js.map