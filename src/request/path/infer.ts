import Request from "../request";

type Infer<Type> = Type extends Request<any, infer As> ? As : never;

export default Infer;
