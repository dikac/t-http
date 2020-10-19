import Response from "./response";
export default function Conflict<Body, Headers extends Record<string, string>>(body: Body, header: Headers): Response<409, string, Headers, Body>;
export default function Conflict<Body>(body: Body): Response<409, string, Record<string, string>, Body>;
export default function Conflict(): Response<409, string, Record<string, string>, undefined>;
