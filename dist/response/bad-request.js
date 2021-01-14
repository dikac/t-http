import DefaultMessage from "./default-message";
export default function BadRequest(response = {}) {
    return DefaultMessage(Object.assign(Object.assign({}, response), { code: 400 }));
}
//# sourceMappingURL=bad-request.js.map