import StandardCode from "./message/message/standard";
import Standard from "./standard";
export default function Unauthorized(body, header) {
    return new Standard(401, StandardCode(401), header ? header : {}, body);
}
//# sourceMappingURL=unauthorized.js.map