import RequestMethod from "../method/method";
export default interface Line<Path extends string = string, Method extends RequestMethod = RequestMethod> {
    method: Method;
    path: Path;
}
