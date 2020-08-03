import Path from "../path";
declare type Infer<Type> = Type extends Path<infer As> ? As : never;
export default Infer;
