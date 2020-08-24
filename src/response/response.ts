import HeaderInterface from "../header/header";
import BodyInterface from "../body/body";
import MessageInterface from "@dikac/t-message/message";
import CodeInterface from "@dikac/t-code/code";

export default interface Response<
    Code extends number = number,
    Message extends string = string,
    Header extends Record<string, string> = Record<string, string>,
    Body = unknown
>  extends CodeInterface<Code>, MessageInterface<Message>, HeaderInterface<Header>, BodyInterface<Body> {

}
