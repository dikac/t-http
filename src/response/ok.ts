import Response from "./response";
import DefaultMessage from "./default-message";

export default function Ok<
    Message extends string,
    Body,
    Headers extends Record<string, string>
>(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<200, Message, Headers, Body> {

    return DefaultMessage({...response, code: 200});
}


