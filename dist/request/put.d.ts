import Request from "./request";
import Method from "./method/method/method";
import PathInterface from "./path/path";
import HeaderInterface from "../headers/headers";
import BodyInterface from "../body/body";
export default function Put<Body, Path extends string, Headers extends Record<string, string>>(request: PathInterface<Path> & HeaderInterface<Headers> & BodyInterface<Body>): Request<Method.PUT, Path, Headers, Body>;
