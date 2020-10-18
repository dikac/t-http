import StandardCode from "./message/message/standard";
import Standard from "./standard";
export default function ServiceUnavailable(body, header) {
    return new Standard(503, StandardCode(503), header ? header : {}, body);
}
//# sourceMappingURL=service-unavailable.js.map