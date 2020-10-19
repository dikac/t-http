import Response from "./response";
export default function Created<Body, Headers extends Record<string, string>>(body: Body, header: Headers): Response<201, string, Headers, Body>;
export default function Created<Body>(body: Body): Response<201, string, Record<string, string>, Body>;
export default function Created(): Response<201, string, Record<string, string>, undefined>;
