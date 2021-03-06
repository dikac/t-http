import Property from "@dikac/t-object/property/boolean/exists";
import Number from "@dikac/t-number/boolean/number";
import Code from "@dikac/t-code/boolean/code";
import Message from "@dikac/t-message/boolean/message";
import String from "@dikac/t-string/boolean/string";
import Object_ from "@dikac/t-object/boolean/object";
export default function Response(value) {
    if (!Code(value) || !Number(value.code)) {
        return false;
    }
    if (!Message(value) || !String(value.message)) {
        return false;
    }
    if (!Property(value, 'headers') || !Object_(value.headers)) {
        return false;
    }
    return true;
}
//# sourceMappingURL=response.js.map