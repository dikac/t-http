import MessageInterface from "@dikac/t-message/message";

export default interface Line<
    Code extends number,
    Message extends string
> extends MessageInterface<Message> {

    code : Code;
}
