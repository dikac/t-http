import Request from "./request";
import Method from "./method/method/method";
export default function Put<Body, Path extends string, Header extends Record<string, string>>(body: Body, path: Path, header: Header): Request<Method.PUT, Path, Header, Body>;
export default function Put<Body, Path extends string>(body: Body, path: Path): Request<Method.PUT, Path, {}, Body>;
