import Standard from "./standard";
import Method from "./method/method/method";
export default function Post(request) {
    return new Standard(Method.POST, request.path, request.headers || {}, request.body);
}
//# sourceMappingURL=post.js.map