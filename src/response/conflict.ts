import Response from "./response";
import StandardCode from "./message/message/standard";
import Standard from "./standard";

export default function Conflict<Body, Header extends Record<string, string>>
    (body : Body, header : Header) : Response<409, string, Header, Body>;
export default function Conflict<Body>
    (body : Body) : Response<409, string, {}, Body>;
export default function Conflict<
    Body,
    Header extends Record<string, string>
>(
    body : Body,
    header ?: Header
) : Response<409, string, Header|{}, Body> {

    return new Standard(409, StandardCode(409), header ? header : {}, body);
}

