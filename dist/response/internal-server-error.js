import DefaultMessage from "./default-message";
export default function InternalServerError(response) {
    return DefaultMessage(Object.assign(Object.assign({}, response), { code: 500 }));
}
//# sourceMappingURL=internal-server-error.js.map