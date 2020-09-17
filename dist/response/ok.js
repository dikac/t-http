import StandardCode from "./message/message/standard";
import Standard from "./standard";
export default function Ok(body, header) {
    return new Standard(200, StandardCode(200), header ? header : {}, body);
}
//# sourceMappingURL=ok.js.map