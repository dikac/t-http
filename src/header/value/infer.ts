import Header from "../header";

type Infer<Data> = Data extends Header<infer As> ? As : never;

export default Infer;
