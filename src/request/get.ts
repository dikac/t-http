import Request from "./request";
import Standard from "./standard";
import Method from "./method/method/method";

export default function Get<Body, Path extends string, Headers extends Record<string, string>>
    (body : Body, path : Path, header : Headers) : Request<Method.GET, Path, Headers, Body>;
export default function Get<Body, Path extends string>
    (body : Body, path : Path) : Request<Method.GET, Path, {}, Body>;
export default function Get<
    Body,
    Path extends string,
    Headers extends Record<string, string>
>(
    body : Body,
    path : Path,
    header ?: Headers
) : Request<Method.GET, Path, Headers|{}, Body> {

    return new Standard(Method.GET, path, header ? header : {}, body);
}

