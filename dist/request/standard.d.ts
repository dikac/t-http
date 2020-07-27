import RequestMethod from "./method/method/method";
import Request from "./request";
export default class Standard<Method extends RequestMethod = RequestMethod, Path extends string = string, Header extends Record<string, string> = Record<string, string>, Body = unknown> implements Request<Method, Path, Header, Body> {
    method: Method;
    path: Path;
    header: Header;
    body: Body;
    constructor(method: Method, path: Path, header: Header, body: Body);
}
