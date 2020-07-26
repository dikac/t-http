import Response from "./response";
export default function UnprocessableEntity<Body, Header extends Record<string, string>>(body: Body, header: Header): Response<422, string, Header, Body>;
export default function UnprocessableEntity<Body>(body: Body): Response<422, string, {}, Body>;
