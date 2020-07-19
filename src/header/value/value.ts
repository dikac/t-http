import Header from "../header";

type Value<Data> = Data extends Header<infer As> ? As : never;

export default Value;
