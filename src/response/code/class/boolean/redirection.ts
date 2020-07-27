/**
 * check if status code {@param code} is part of class code {@param prefix}
 */
import Lower from "@dikac/t-number/boolean/lower";
import Greater from "@dikac/t-number/boolean/greater";

export default function Redirection (code : number) : boolean {

    return Greater(code, 300, true) && Lower(code, 400, false);
}
