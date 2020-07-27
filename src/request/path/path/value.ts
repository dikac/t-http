import Request from "../../request";
import Path from "../path";

type Value<Type> = Type extends Path<infer As> ? As : never;

export default Value;
