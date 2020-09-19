import Request from "./request";
import Standard from "./standard";
import Method from "./method/method/method";

export default function Delete<Body, Path extends string, Headers extends Record<string, string>>
    (body : Body, path : Path, header : Headers) : Request<Method.DELETE, Path, Headers, Body>;
export default function Delete<Body, Path extends string>
    (body : Body, path : Path) : Request<Method.DELETE, Path, {}, Body>;
export default function Delete<
    Body,
    Path extends string,
    Headers extends Record<string, string>
>(
    body : Body,
    path : Path,
    header ?: Headers
) : Request<Method.DELETE, Path, Headers|{}, Body> {

    return new Standard(Method.DELETE, path, header ? header : {}, body);
}

