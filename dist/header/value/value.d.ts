import Header from "../header";
declare type Value<Data> = Data extends Header<infer As> ? As : never;
export default Value;
