import Request from "./request";
import Standard from "./standard";
import Method from "./method/method/method";

export default function Post<Body, Path extends string,Header extends Record<string, string>>
    (body : Body, path : Path, header : Header) : Request<Method.POST, Path, Header, Body>;
export default function Post<Body, Path extends string>
    (body : Body, path : Path) : Request<Method.POST, Path, {}, Body>;
export default function Post<
    Body,
    Path extends string,
    Header extends Record<string, string>
>(
    body : Body,
    path : Path,
    header ?: Header
) : Request<Method.POST, Path, Header|{}, Body> {

    return new Standard(Method.POST, path, header ? header : {}, body);
}

