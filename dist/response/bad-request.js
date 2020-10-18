import StandardCode from "./message/message/standard";
import Standard from "./standard";
export default function BadRequest(body, header) {
    return new Standard(400, StandardCode(400), header ? header : {}, body);
}
//# sourceMappingURL=bad-request.js.map