import RequestMethod from "./method/method/method";
import Request from "./request";
export default class Standard<Method extends RequestMethod = RequestMethod, Path extends string = string, Headers extends Record<string, string> = Record<string, string>, Body = unknown> implements Request<Method, Path, Headers, Body> {
    method: Method;
    path: Path;
    headers: Headers;
    body: Body;
    constructor(method: Method, path: Path, headers: Headers, body: Body);
}
