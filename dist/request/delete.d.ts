import Request from "./request";
import Method from "./method/method/method";
export default function Delete<Body, Path extends string, Header extends Record<string, string>>(body: Body, path: Path, header: Header): Request<Method.DELETE, Path, Header, Body>;
export default function Delete<Body, Path extends string>(body: Body, path: Path): Request<Method.DELETE, Path, {}, Body>;
