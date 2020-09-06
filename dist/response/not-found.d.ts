import Response from "./response";
export default function NotFound<Body, Header extends Record<string, string>>(body: Body, header: Header): Response<404, string, Header, Body>;
export default function NotFound<Body>(body: Body): Response<404, string, {}, Body>;
