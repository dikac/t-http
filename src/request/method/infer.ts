import Request from "../request";

type Infer<Type> = Type extends Request<infer As> ? As : never;

export default Infer;
