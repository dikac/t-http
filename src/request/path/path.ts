import RequestMethod from "../method/method/method";

export default interface Path<
    Path extends string = string,
> {
    path : Path;
}
