import Response from "./response";
export default function Ok<Body, Headers extends Record<string, string>>(body: Body, header: Headers): Response<200, string, Headers, Body>;
export default function Ok<Body>(body: Body): Response<200, string, Record<string, string>, Body>;
export default function Ok(): Response<200, string, Record<string, string>, undefined>;
