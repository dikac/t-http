import StandardCode from "./message/message/standard";
import Standard from "./standard";
export default function Created(body, header) {
    return new Standard(201, StandardCode(201), header ? header : {}, body);
}
//# sourceMappingURL=created.js.map