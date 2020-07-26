import Response from "./response";
export default function InternalServerError<Body, Header extends Record<string, string>>(body: Body, header: Header): Response<500, string, Header, Body>;
export default function InternalServerError<Body>(body: Body): Response<500, string, {}, Body>;
