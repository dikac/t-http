import Method from "../method";
declare type Infer<Type> = Type extends Method<infer As> ? As : never;
export default Infer;
