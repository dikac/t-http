import Request from "./request";
import Standard from "./standard";
import Method from "./method/method/method";
import PathInterface from "./path/path";
import HeaderInterface from "../headers/headers";

export default function Get<
    Path extends string,
    Headers extends Record<string, string>
>(
    request : PathInterface<Path> & Partial<HeaderInterface<Headers>>,
) : Request<Method.GET, Path, Headers, undefined> {

    return new Standard(
        Method.GET,
        request.path,
        request.headers || {},
        undefined
    ) as Request<Method.GET, Path, Headers, undefined>;
}
