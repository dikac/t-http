import StandardCode from "./message/message/standard";
import Standard from "./standard";
export default function NotFound(body, header) {
    return new Standard(404, StandardCode(404), header ? header : {}, body);
}
//# sourceMappingURL=not-found.js.map