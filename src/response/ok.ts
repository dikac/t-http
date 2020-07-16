import Response from "./response";
import Standard from "./codes/standard";
import Optional from "../header/infer/optional";

export default function Ok<
    Body,
    Header extends Record<string, string>|undefined
>(body : Body, header : Header) : Response<200, string, Optional<Header>, Body> {

    return {
        message : Standard()["200"],
        body : body,
        code : 200,
        header : <Optional<Header>>(header ? header : {})
    }
}

