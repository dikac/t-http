import RequestMethod from "./method/method";
import Request from "./request";

export default class Standard<
    Method extends RequestMethod = RequestMethod,
    Path extends string = string,
    Header extends Record<string, string> = Record<string, string>,
    Body = unknown
> implements Request<Method, Path, Header, Body> {

    constructor(
        public method : Method,
        public path : Path,
        public header : Header,
        public body : Body,
    ) {

    }
}

