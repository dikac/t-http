import Response from "./response";
import StandardCode from "./message/message/standard";
import Standard from "./standard";

export default function PaymentRequired<Body, Headers extends Record<string, string>>
    (body : Body, header : Headers) : Response<402, string, Headers, Body>;
export default function PaymentRequired<Body>
    (body : Body) : Response<402, string, Record<string, string>, Body>;
export default function PaymentRequired
    () : Response<402, string, Record<string, string>, undefined>;
export default function PaymentRequired<
    Body,
    Headers extends Record<string, string>
>(
    body ? : Body,
    header ?: Headers
) : Response<402, string, Headers|{}, Body|undefined> {

    return new Standard(402, StandardCode(402), header ? header : {}, body);
}

