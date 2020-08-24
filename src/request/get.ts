import Request from "./request";
import Standard from "./standard";
import Method from "./method/method/method";

export default function Get<Body, Path extends string,Header extends Record<string, string>>
    (body : Body, path : Path, header : Header) : Request<Method.GET, Path, Header, Body>;
export default function Get<Body, Path extends string>
    (body : Body, path : Path) : Request<Method.GET, Path, {}, Body>;
export default function Get<
    Body,
    Path extends string,
    Header extends Record<string, string>
>(
    body : Body,
    path : Path,
    header ?: Header
) : Request<Method.GET, Path, Header|{}, Body> {

    return new Standard(Method.GET, path, header ? header : {}, body);
}

