import Lower from "@dikac/t-number/boolean/lower";
import Greater from "@dikac/t-number/boolean/greater";
/**
 * check if {@param code} is part of client error http status code (4xx)
 *
 * @param code
 */
export default function ClientError(code) {
    return Greater(code, 400, true) && Lower(code, 500, false);
}
//# sourceMappingURL=client-error.js.map