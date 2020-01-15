import Line from "./line/line";
import RequestMethod from "./method/method";
import HeaderInterface from "../header/header";
import BodyInterface from "../body/body";

export default interface Request<
    Method extends RequestMethod,
    Path extends string,
    Header extends Record<string, string>,
    Body
> extends Line<Path, Method>, HeaderInterface<Header>, BodyInterface<Body> {

}


// class Class implements Request<Method.POST, {}, {}, {}>{
//
// }