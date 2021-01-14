import Standard from "./standard";
import Method from "./method/method/method";
export default function Delete(request) {
    return new Standard(Method.DELETE, request.path, request.headers || {}, request.body);
}
//# sourceMappingURL=delete.js.map