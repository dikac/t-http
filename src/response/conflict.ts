import Response from "./response";
import StandardCode from "./message/message/standard";
import Standard from "./standard";

export default function Conflict<Body, Headers extends Record<string, string>>
    (body : Body, header : Headers) : Response<409, string, Headers, Body>;
export default function Conflict<Body>
    (body : Body) : Response<409, string, {}, Body>;
export default function Conflict
() : Response<409, string, {}, undefined>;
export default function Conflict<
    Body,
    Headers extends Record<string, string>
>(
    body ?: Body,
    header ?: Headers
) : Response<409, string, Headers|{}, undefined|Body> {

    return new Standard(409, StandardCode(409), header ? header : {}, body);
}

