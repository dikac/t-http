import Response from "./response";
import StandardCode from "./message/message/standard";
import Standard from "./standard";

export default function ServiceUnavailable<Body, Headers extends Record<string, string>>
    (body : Body, header : Headers) : Response<503, string, Headers, Body>;
export default function ServiceUnavailable<Body>
    (body : Body) : Response<503, string, {}, Body>;
export default function ServiceUnavailable
    () : Response<503, string, {}, undefined>;
export default function ServiceUnavailable<
    Body,
    Headers extends Record<string, string>
>(
    body ? : Body,
    header ?: Headers
) : Response<503, string, Headers|{}, undefined|Body> {

    return new Standard(503, StandardCode(503), header ? header : {}, body);
}

