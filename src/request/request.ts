import PathInterface from "./path/path";
import MethodInterface from "./method/method";
import RequestMethod from "./method/method/method";
import HeaderInterface from "../header/header";
import BodyInterface from "../body/body";

export default interface Request<
    Method extends RequestMethod = RequestMethod,
    Path extends string = string,
    Header extends  Record<string, string> = Record<string, string>,
    Body = unknown
> extends PathInterface<Path>, MethodInterface<Method>, HeaderInterface<Header>, BodyInterface<Body> {

}
