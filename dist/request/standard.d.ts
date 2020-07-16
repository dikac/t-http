import RequestMethod from "./method/method";
import Request from "./request";
export default class Standard<Method extends RequestMethod, Path extends string, Header extends Record<string, string>, Body> implements Request<Method, Path, Header, Body> {
    method: Method;
    path: Path;
    header: Header;
    body: Body;
    constructor(method: Method, path: Path, header: Header, body: Body);
}
