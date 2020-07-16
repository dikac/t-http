import Response from "./response";
import Optional from "../header/infer/optional";
export default function Ok<Body, Header extends Record<string, string> | undefined>(body: Body, header: Header): Response<200, string, Optional<Header>, Body>;
