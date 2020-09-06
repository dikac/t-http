import Response from "./response";
import StandardCode from "./message/message/standard";
import Standard from "./standard";

export default function NotFound<Body, Header extends Record<string, string>>
    (body : Body, header : Header) : Response<404, string, Header, Body>;
export default function NotFound<Body>
    (body : Body) : Response<404, string, {}, Body>;
export default function NotFound
    () : Response<404, string, {}, undefined>;
export default function NotFound<
    Body,
    Header extends Record<string, string>
>(
    body ? : Body,
    header ?: Header
) : Response<404, string, Header|{}, Body|undefined> {

    return new Standard(404, StandardCode(404), header ? header : {}, body);
}

