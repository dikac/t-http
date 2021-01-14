import Response from "./response";
export default function ServiceUnavailable<Message extends string, Body, Headers extends Record<string, string>>(response: Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>): Response<503, Message, Headers, Body>;
