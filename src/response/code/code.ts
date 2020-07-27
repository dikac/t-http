import MessageInterface from "@dikac/t-message/message";

export default interface Code<
    Code extends number = number,
> {
    code : Code;
}
