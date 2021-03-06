import Lower from "@dikac/t-number/boolean/lower";
import Greater from "@dikac/t-number/boolean/greater";
/**
 * check if {@param code} is part of server error http status code (5xx)
 *
 * @param code
 */
export default function ServerError(code) {
    return Greater(code, 500, true) && Lower(code, 600, false);
}
//# sourceMappingURL=server-error.js.map