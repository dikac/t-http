import Response from "./response";
import DefaultMessage from "./default-message";


export default function PaymentRequired<
    Message extends string,
    Body,
    Headers extends Record<string, string>
>(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<402, Message, Headers, Body> {

    return DefaultMessage({...response, code: 402});
}
