import Body from "../body";

type Value<Data> = Data extends Body<infer As> ? As : never;

export default Value;
