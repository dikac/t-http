import Response from "./response";
export default function Ok<Body, Header extends Record<string, string>>(body: Body, header: Header): Response<200, string, Header, Body>;
export default function Ok<Body>(body: Body): Response<200, string, {}, Body>;
export default function Ok(): Response<200, string, {}, undefined>;
