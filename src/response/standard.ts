import Response from "./response";

export default class Standard<
    Code extends number,
    Message extends string,
    Headers extends Record<string, string>,
    Body
> implements Response<Code, Message, Headers, Body> {

    constructor(
        public code : Code,
        public message : Message,
        public headers : Headers,
        public body : Body
    ) {

    }
}

