import Request from "./request";
import Standard from "./standard";
import Method from "./method/method/method";
import PathInterface from "./path/path";
import HeaderInterface from "../headers/headers";
import BodyInterface from "../body/body";

export default function Delete<
    Body,
    Path extends string,
    Headers extends Record<string, string>
>(
    request : PathInterface<Path> & HeaderInterface<Headers> & BodyInterface<Body>,
) : Request<Method.DELETE, Path, Headers, Body> {

    return new Standard(
        Method.DELETE,
        request.path,
        request.headers || {},
        request.body
    );
}

