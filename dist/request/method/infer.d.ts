import Request from "../request";
declare type Infer<Type> = Type extends Request<infer As> ? As : never;
export default Infer;
