/**
 * check if status code {@param code} is part of class code {@param prefix}
 */
import Lower from "@dikac/t-number/boolean/lower";
import Greater from "@dikac/t-number/boolean/greater";

export default function Informational(code : number) : boolean {

    return Greater(code, 100, true) && Lower(code, 200, false);
}
