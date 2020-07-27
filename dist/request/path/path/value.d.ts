import Path from "../path";
declare type Value<Type> = Type extends Path<infer As> ? As : never;
export default Value;
