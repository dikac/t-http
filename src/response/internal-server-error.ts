import Response from "./response";
import StandardCode from "./message/message/standard";
import Standard from "./standard";

export default function InternalServerError<Body, Headers extends Record<string, string>>
    (body : Body, header : Headers) : Response<500, string, Headers, Body>;
export default function InternalServerError<Body>
    (body : Body) : Response<500, string, {}, Body>;
export default function InternalServerError
    () : Response<500, string, {}, undefined>;
export default function InternalServerError<
    Body,
    Headers extends Record<string, string>
>(
    body ? : Body,
    header ?: Headers
) : Response<500, string, Headers|{}, undefined|Body> {

    return new Standard(500, StandardCode(500), header ? header : {}, body);
}

