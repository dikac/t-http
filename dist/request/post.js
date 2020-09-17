import Standard from "./standard";
import Method from "./method/method/method";
export default function Post(body, path, header) {
    return new Standard(Method.POST, path, header ? header : {}, body);
}
//# sourceMappingURL=post.js.map