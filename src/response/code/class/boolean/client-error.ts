/**
 * check if status code {@param code} is part of class code {@param prefix}
 */
import Lower from "@dikac/t-number/boolean/lower";
import Greater from "@dikac/t-number/boolean/greater";

export default function ClientError(code : number) : boolean {

    return Greater(code, 400, true) && Lower(code, 500, false);
}
