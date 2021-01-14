import DefaultMessage from "./default-message";
export default function Ok(response) {
    return DefaultMessage(Object.assign(Object.assign({}, response), { code: 200 }));
}
//# sourceMappingURL=ok.js.map