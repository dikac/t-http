import Standard from "./standard";
import Method from "./method/method/method";
export default function Get(body, path, header) {
    return new Standard(Method.GET, path, header ? header : {}, body);
}
//# sourceMappingURL=get.js.map