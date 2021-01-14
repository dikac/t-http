import DefaultMessage from "./default-message";
export default function Unauthorized(response = {}) {
    return DefaultMessage(Object.assign(Object.assign({}, response), { code: 401 }));
}
//# sourceMappingURL=unauthorized.js.map