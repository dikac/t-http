import Response from "./response";
import StandardCode from "./message/message/standard";
import Standard from "./standard";

export default function BadRequest<Body, Headers extends Record<string, string>>
    (body : Body, header : Headers) : Response<400, string, Headers, Body>;
export default function BadRequest<Body>
    (body : Body) : Response<400, string, Record<string, string>, Body>;
export default function BadRequest
    () : Response<400, string, Record<string, string>, undefined>;
export default function BadRequest<
    Body,
    Headers extends Record<string, string>
>(
    body ? : Body,
    header ?: Headers
) : Response<400, string, Headers|{}, Body|undefined> {

    return new Standard(400, StandardCode(400), header ? header : {}, body);
}

