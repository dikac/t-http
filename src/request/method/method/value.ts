import Request from "../../request";
import Method from "../method";

type Value<Type> = Type extends Method<infer As> ? As : never;

export default Value;
