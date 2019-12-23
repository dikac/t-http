import Method from "./method/method";
import Request from "./request";

export default class Standard<M extends Method, P extends string, H extends Record<string, string>, B> implements Request<M,P,H,B> {

    constructor(
        public method : M,
        public path : P,
        public body : B,
        public header : H
    ) {

    }
}

