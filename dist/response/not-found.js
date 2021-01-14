import DefaultMessage from "./default-message";
export default function NotFound(response = {}) {
    return DefaultMessage(Object.assign(Object.assign({}, response), { code: 404 }));
}
//# sourceMappingURL=not-found.js.map