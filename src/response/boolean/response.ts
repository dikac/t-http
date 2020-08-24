import ResponseInterface from "../response";
import Property from "@dikac/t-object/property/boolean/property";
import Number from "@dikac/t-number/boolean/number";
import Code from "@dikac/t-code/boolean/code";
import Message from "@dikac/t-message/boolean/message";
import String from "@dikac/t-string/boolean/string";
import Object_ from "@dikac/t-object/boolean/object";

export default function Response(value : object) : value is ResponseInterface {

    if(!Code(value) || !Number(value.code)) {

        return false;
    }

    if(!Message(value) || !String(value.message)) {

        return false;
    }

    if(!Property(value, 'header') || !Object_(value.header)) {

        return false;
    }

    return true;
}
