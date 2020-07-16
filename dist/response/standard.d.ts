import Response from "./response";
export default class Standard<Code extends number, Message extends string, Header extends Record<string, string>, Body> implements Response<Code, Message, Header, Body> {
    code: Code;
    message: Message;
    header: Header;
    body: Body;
    constructor(code: Code, message: Message, header: Header, body: Body);
}
