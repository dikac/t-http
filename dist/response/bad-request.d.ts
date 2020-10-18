import Response from "./response";
export default function BadRequest<Body, Headers extends Record<string, string>>(body: Body, header: Headers): Response<400, string, Headers, Body>;
export default function BadRequest<Body>(body: Body): Response<400, string, {}, Body>;
export default function BadRequest(): Response<400, string, {}, undefined>;
