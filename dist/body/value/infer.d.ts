import Body from "../body";
declare type Infer<Data> = Data extends Body<infer As> ? As : never;
export default Infer;
