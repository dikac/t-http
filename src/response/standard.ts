import Response from "./response";

export default class Standard<
    Code extends number,
    Message extends string,
    Header extends Record<string, string>,
    Body
> implements Response<Code, Message, Header, Body> {

    constructor(
        public code : Code,
        public message : Message,
        public header : Header,
        public body : Body
    ) {

    }
}

