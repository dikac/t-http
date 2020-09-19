import Response from "./response";
export default function UnprocessableEntity<Body, Headers extends Record<string, string>>(body: Body, header: Headers): Response<422, string, Headers, Body>;
export default function UnprocessableEntity<Body>(body: Body): Response<422, string, {}, Body>;
export default function UnprocessableEntity(): Response<422, string, {}, undefined>;
