import Response from "./response";
export default function Created<Body, Header extends Record<string, string>>(body: Body, header: Header): Response<201, string, Header, Body>;
export default function Created<Body>(body: Body): Response<201, string, {}, Body>;
export default function Created(): Response<201, string, {}, undefined>;
