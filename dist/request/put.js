import Standard from "./standard";
import Method from "./method/method/method";
export default function Put(body, path, header) {
    return new Standard(Method.PUT, path, header ? header : {}, body);
}
//# sourceMappingURL=put.js.map