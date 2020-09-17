import Lower from "@dikac/t-number/boolean/lower";
import Greater from "@dikac/t-number/boolean/greater";
/**
 * check if {@param code} is part of redirection http status code (3xx)
 *
 * @param code
 */
export default function Redirection(code) {
    return Greater(code, 300, true) && Lower(code, 400, false);
}
//# sourceMappingURL=redirection.js.map