import Standard from "./standard";
import Method from "./method/method/method";
export default function Get(request) {
    return new Standard(Method.GET, request.path, request.headers || {}, undefined);
}
//# sourceMappingURL=get.js.map