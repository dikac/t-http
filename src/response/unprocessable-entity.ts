import Response from "./response";
import StandardCode from "./message/message/standard";
import Standard from "./standard";

export default function UnprocessableEntity<Body, Headers extends Record<string, string>>
    (body : Body, header : Headers) : Response<422, string, Headers, Body>;
export default function UnprocessableEntity<Body>
    (body : Body) : Response<422, string, {}, Body>;
export default function UnprocessableEntity
    () : Response<422, string, {}, undefined>;
export default function UnprocessableEntity<
    Body,
    Headers extends Record<string, string>
>(
    body ?: Body,
    headers ?: Headers
) : Response<422, string, Headers|{}, Body|undefined> {

    return new Standard(422, StandardCode(422), headers ? headers : {}, body);
}

