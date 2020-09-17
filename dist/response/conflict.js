import StandardCode from "./message/message/standard";
import Standard from "./standard";
export default function Conflict(body, header) {
    return new Standard(409, StandardCode(409), header ? header : {}, body);
}
//# sourceMappingURL=conflict.js.map