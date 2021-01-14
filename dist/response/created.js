import DefaultMessage from "./default-message";
export default function Created(response = {}) {
    return DefaultMessage(Object.assign(Object.assign({}, response), { code: 201 }));
}
//# sourceMappingURL=created.js.map