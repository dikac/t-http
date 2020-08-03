import Header from "../header";
declare type Infer<Data> = Data extends Header<infer As> ? As : never;
export default Infer;
