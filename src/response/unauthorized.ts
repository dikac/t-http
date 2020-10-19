import Response from "./response";
import StandardCode from "./message/message/standard";
import Standard from "./standard";

export default function Unauthorized<Body, Headers extends Record<string, string>>
    (body : Body, header : Headers) : Response<401, string, Headers, Body>;
export default function Unauthorized<Body>
    (body : Body) : Response<401, string, Record<string, string>, Body>;
export default function Unauthorized
    () : Response<401, string, Record<string, string>, undefined>;
export default function Unauthorized<
    Body,
    Headers extends Record<string, string>
>(
    body ? : Body,
    header ?: Headers
) : Response<401, string, Headers|{}, Body|undefined> {

    return new Standard(401, StandardCode(401), header ? header : {}, body);
}

