import Response from "./response";
import StandardCode from "./message/message/standard";
import Standard from "./standard";

export default function Created<Body, Header extends Record<string, string>>
    (body : Body, header : Header) : Response<201, string, Header, Body>;


export default function Created<Body>
    (body : Body) : Response<201, string, {}, Body>;

export default function Created<
    Body,
    Header extends Record<string, string>
>(
    body : Body,
    header ?: Header
) : Response<201, string, Header|{}, Body> {

    return new Standard(201, StandardCode(201), header ? header : {}, body);
}

