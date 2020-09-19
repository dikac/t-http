import Request from "./request";
import Standard from "./standard";
import Method from "./method/method/method";

export default function Post<Body, Path extends string,Headers extends Record<string, string>>
    (body : Body, path : Path, header : Headers) : Request<Method.POST, Path, Headers, Body>;
export default function Post<Body, Path extends string>
    (body : Body, path : Path) : Request<Method.POST, Path, {}, Body>;
export default function Post<
    Body,
    Path extends string,
    Headers extends Record<string, string>
>(
    body : Body,
    path : Path,
    header ?: Headers
) : Request<Method.POST, Path, Headers|{}, Body> {

    return new Standard(Method.POST, path, header ? header : {}, body);
}

