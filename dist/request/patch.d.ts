import Request from "./request";
import Method from "./method/method/method";
export default function Patch<Body, Path extends string, Headers extends Record<string, string>>(body: Body, path: Path, header: Headers): Request<Method.PATCH, Path, Headers, Body>;
export default function Patch<Body, Path extends string>(body: Body, path: Path): Request<Method.PATCH, Path, {}, Body>;
