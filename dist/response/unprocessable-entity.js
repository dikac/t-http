import StandardCode from "./message/message/standard";
import Standard from "./standard";
export default function UnprocessableEntity(body, header) {
    return new Standard(422, StandardCode(422), header ? header : {}, body);
}
//# sourceMappingURL=unprocessable-entity.js.map