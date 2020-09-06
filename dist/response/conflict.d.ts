import Response from "./response";
export default function Conflict<Body, Header extends Record<string, string>>(body: Body, header: Header): Response<409, string, Header, Body>;
export default function Conflict<Body>(body: Body): Response<409, string, {}, Body>;
export default function Conflict(): Response<409, string, {}, undefined>;
