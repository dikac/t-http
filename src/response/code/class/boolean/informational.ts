import Lower from "@dikac/t-number/boolean/lower";
import Greater from "@dikac/t-number/boolean/greater";
/**
 * check if {@param code} is part of informational http status code (1xx)
 *
 * @param code
 */
export default function Informational(code : number) : boolean {

    return Greater(code, 100, true) && Lower(code, 200, false);
}
