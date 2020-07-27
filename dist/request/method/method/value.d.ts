import Method from "../method";
declare type Value<Type> = Type extends Method<infer As> ? As : never;
export default Value;
