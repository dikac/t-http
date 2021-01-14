import Standard from "./standard";
import StandardCode from "./message/message/standard";
export default function DefaultMessage(response) {
    return new Standard(response.code, response.message || StandardCode(response.code), response.headers || {}, response.body);
}
//# sourceMappingURL=default-message.js.map