import Response from "./response";
import StandardCode from "./codes/standard";
import Optional from "../header/value/value";
import Standard from "./standard";

export default function Ok<Body, Header extends Record<string, string>>
    (body : Body, header : Header) : Response<200, string, Header, Body>;


export default function Ok<Body>
    (body : Body) : Response<200, string, {}, Body>;

export default function Ok<
    Body,
    Header extends Record<string, string>
>(
    body : Body,
    header ?: Header
) : Response<200, string, Header|{}, Body> {

    return new Standard(200, StandardCode(200), header ? header : {}, body);
}
