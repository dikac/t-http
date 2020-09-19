import Request from "./request";
import Method from "./method/method/method";
export default function Delete<Body, Path extends string, Headers extends Record<string, string>>(body: Body, path: Path, header: Headers): Request<Method.DELETE, Path, Headers, Body>;
export default function Delete<Body, Path extends string>(body: Body, path: Path): Request<Method.DELETE, Path, {}, Body>;
