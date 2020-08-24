import RequestInterface from "../request";
import String from "@dikac/t-string/boolean/string";
import Property from "@dikac/t-object/property/boolean/property";
import Object_ from "@dikac/t-object/boolean/object";
import Enum from "@dikac/t-enum/boolean/enum";
import Method from "../method/method/method";

export default function Request(value : object) : value is RequestInterface {

    if(!Property(value, 'header') || !Object_(value.header)) {

        return false;
    }

    if(!Property(value, 'path') || !String(value.path)) {

        return false;
    }

    if(!Property(value, 'method') || !Enum(value.method, Method)) {

        return false;
    }

    return true;
}
