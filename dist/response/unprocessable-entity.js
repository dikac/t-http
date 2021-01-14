import DefaultMessage from "./default-message";
export default function UnprocessableEntity(response = {}) {
    return DefaultMessage(Object.assign(Object.assign({}, response), { code: 422 }));
}
//# sourceMappingURL=unprocessable-entity.js.map