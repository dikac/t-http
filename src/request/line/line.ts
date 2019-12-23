import Method from "../method/method";

export default interface Line<P extends string, M extends Method> {

    method : M;
    path : P;
}