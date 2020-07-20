import Request from "../request";
declare type Infer<Type> = Type extends Request<any, any, infer As> ? As : never;
export default Infer;
