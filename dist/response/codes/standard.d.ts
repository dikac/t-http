import Codes from "./codes";
declare function Standard(): Codes;
declare function Standard(code: keyof Codes): string;
export default Standard;
