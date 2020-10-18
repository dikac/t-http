import Response from "./response";
export default function Unauthorized<Body, Headers extends Record<string, string>>(body: Body, header: Headers): Response<401, string, Headers, Body>;
export default function Unauthorized<Body>(body: Body): Response<401, string, {}, Body>;
export default function Unauthorized(): Response<401, string, {}, undefined>;
