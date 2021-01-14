import Standard from "./standard";
import Method from "./method/method/method";
export default function Patch(request) {
    return new Standard(Method.PATCH, request.path, request.headers || {}, request.body);
}
//# sourceMappingURL=patch.js.map