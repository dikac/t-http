import Headers from "../headers";
declare type Infer<Data> = Data extends Headers<infer As> ? As : never;
export default Infer;
