import Response from "./response";
export default function InternalServerError<Body, Headers extends Record<string, string>>(body: Body, header: Headers): Response<500, string, Headers, Body>;
export default function InternalServerError<Body>(body: Body): Response<500, string, Record<string, string>, Body>;
export default function InternalServerError(): Response<500, string, Record<string, string>, undefined>;
