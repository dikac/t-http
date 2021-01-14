import Standard from "./standard";
import Method from "./method/method/method";
export default function Put(request) {
    return new Standard(Method.PUT, request.path, request.headers || {}, request.body);
}
//# sourceMappingURL=put.js.map