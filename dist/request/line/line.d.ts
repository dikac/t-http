import RequestMethod from "../method/method";
export default interface Line<Path extends string, Method extends RequestMethod> {
    method: Method;
    path: Path;
}
