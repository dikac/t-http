import Standard from "./standard";
import Method from "./method/method/method";
export default function Patch(body, path, header) {
    return new Standard(Method.PATCH, path, header ? header : {}, body);
}
//# sourceMappingURL=patch.js.map