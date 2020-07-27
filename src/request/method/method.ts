import RequestMethod from "../method/method/method";

export default interface Method<
    Method extends RequestMethod = RequestMethod
> {
    method : Method;
}
