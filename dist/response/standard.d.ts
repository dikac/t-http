import Response from "./response";
export default class Standard<Code extends number, Message extends string, Headers extends Record<string, string>, Body> implements Response<Code, Message, Headers, Body> {
    code: Code;
    message: Message;
    headers: Headers;
    body: Body;
    constructor(code: Code, message: Message, headers: Headers, body: Body);
}
