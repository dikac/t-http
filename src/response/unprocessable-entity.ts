import Response from "./response";
import StandardCode from "./message/message/standard";
import Standard from "./standard";

export default function UnprocessableEntity<Body, Header extends Record<string, string>>
    (body : Body, header : Header) : Response<422, string, Header, Body>;
export default function UnprocessableEntity<Body>
    (body : Body) : Response<422, string, {}, Body>;
export default function UnprocessableEntity<
    Body,
    Header extends Record<string, string>
>(
    body : Body,
    header ?: Header
) : Response<422, string, Header|{}, Body> {

    return new Standard(422, StandardCode(422), header ? header : {}, body);
}

