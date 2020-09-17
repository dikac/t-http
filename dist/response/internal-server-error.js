import StandardCode from "./message/message/standard";
import Standard from "./standard";
export default function InternalServerError(body, header) {
    return new Standard(500, StandardCode(500), header ? header : {}, body);
}
//# sourceMappingURL=internal-server-error.js.map