import Line from "./line/line";
import RequestMethod from "./method/method";
import HeaderInterface from "../header/header";
import BodyInterface from "../body/body";
export default interface Request<Method extends RequestMethod = RequestMethod, Path extends string = string, Header extends Record<string, string> = Record<string, string>, Body = unknown> extends Line<Path, Method>, HeaderInterface<Header>, BodyInterface<Body> {
}
