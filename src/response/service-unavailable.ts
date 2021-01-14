import Response from "./response";
import DefaultMessage from "./default-message";

export default function ServiceUnavailable<
    Message extends string,
    Body,
    Headers extends Record<string, string>
>(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<503, Message, Headers, Body> {

    return DefaultMessage({...response, code: 503});
}
