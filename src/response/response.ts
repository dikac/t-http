import Line from "./line/line";
import Method from "../request/method/method";

export default interface Response<B, C extends number, M extends string, H extends Record<string, string> = {}>  extends Line<C, M> {

    header : H;
    body : B;
}