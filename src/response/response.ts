import Line from "./line/line";
import HeaderInterface from "../header/header";
import BodyInterface from "../body/body";

export default interface Response<
    Code extends number = number,
    Message extends string = string,
    Header extends Record<string, string> = Record<string, string>,
    Body = unknown
>  extends Line<Code, Message>, HeaderInterface<Header>, BodyInterface<Body> {

}
