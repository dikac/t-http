import Response from "./response";
export default function PaymentRequired<Body, Headers extends Record<string, string>>(body: Body, header: Headers): Response<402, string, Headers, Body>;
export default function PaymentRequired<Body>(body: Body): Response<402, string, {}, Body>;
export default function PaymentRequired(): Response<402, string, {}, undefined>;
