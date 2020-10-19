import Response from "./response";
import StandardCode from "./message/message/standard";
import Standard from "./standard";

export default function NotFound<Body, Headers extends Record<string, string>>
    (body : Body, header : Headers) : Response<404, string, Headers, Body>;
export default function NotFound<Body>
    (body : Body) : Response<404, string, Record<string, string>, Body>;
export default function NotFound
    () : Response<404, string, Record<string, string>, undefined>;
export default function NotFound<
    Body,
    Headers extends Record<string, string>
>(
    body ? : Body,
    header ?: Headers
) : Response<404, string, Headers|{}, Body|undefined> {

    return new Standard(404, StandardCode(404), header ? header : {}, body);
}

