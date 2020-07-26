import Response from "./response";
import StandardCode from "./message/message/standard";
import Optional from "../header/value/value";
import Standard from "./standard";

export default function InternalServerError<Body, Header extends Record<string, string>>
    (body : Body, header : Header) : Response<500, string, Header, Body>;


export default function InternalServerError<Body>
    (body : Body) : Response<500, string, {}, Body>;

export default function InternalServerError<
    Body,
    Header extends Record<string, string>
>(
    body : Body,
    header ?: Header
) : Response<500, string, Header|{}, Body> {

    return new Standard(500, StandardCode(500), header ? header : {}, body);
}

