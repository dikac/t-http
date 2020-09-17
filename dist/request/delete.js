import Standard from "./standard";
import Method from "./method/method/method";
export default function Delete(body, path, header) {
    return new Standard(Method.DELETE, path, header ? header : {}, body);
}
//# sourceMappingURL=delete.js.map