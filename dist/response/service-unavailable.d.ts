import Response from "./response";
export default function ServiceUnavailable<Body, Headers extends Record<string, string>>(body: Body, header: Headers): Response<503, string, Headers, Body>;
export default function ServiceUnavailable<Body>(body: Body): Response<503, string, Record<string, string>, Body>;
export default function ServiceUnavailable(): Response<503, string, Record<string, string>, undefined>;
