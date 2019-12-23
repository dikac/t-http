import Line from "./line/line";
import Method from "./method/method";

export default interface Request<M extends Method, P extends string, H extends Record<string, string>, B> extends Line<P, M> {

    header : H;
    body : B;
}