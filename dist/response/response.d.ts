import Line from "./line/line";
import HeaderInterface from "../header/header";
import BodyInterface from "../body/body";
export default interface Response<Code extends number, Message extends string, Header extends Record<string, string>, Body> extends Line<Code, Message>, HeaderInterface<Header>, BodyInterface<Body> {
}
