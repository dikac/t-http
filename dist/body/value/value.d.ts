import Body from "../body";
declare type Value<Data> = Data extends Body<infer As> ? As : never;
export default Value;
