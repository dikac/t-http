import StandardCode from "./message/message/standard";
import Standard from "./standard";
export default function UnprocessableEntity(body, headers) {
    return new Standard(422, StandardCode(422), headers ? headers : {}, body);
}
//# sourceMappingURL=unprocessable-entity.js.map