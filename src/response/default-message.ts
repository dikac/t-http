import Response from "./response";
import Standard from "./standard";
import StandardCode from "./message/message/standard";
import Codes from "./message/message/codes";

export default function DefaultMessage<
    Code extends keyof Codes,
    Message extends string,
    Body,
    Headers extends Record<string, string>
>(
    response : Pick<Response<Code>, 'code'> & Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<Code, Message, Headers, Body> {

    return new Standard(
        response.code,
        response.message || StandardCode(response.code),
        response.headers || {},
        response.body
    ) as Response<Code, Message, Headers, Body>;
}
