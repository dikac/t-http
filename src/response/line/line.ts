import MessageInterface from "@dikac/t-message/message";

export default interface Line<
    Code extends number = number,
    Message extends string = string
> extends MessageInterface<Message> {

    code : Code;
}
