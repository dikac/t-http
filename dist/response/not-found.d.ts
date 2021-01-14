import Response from "./response";
export default function NotFound<Message extends string, Body, Headers extends Record<string, string>>(response: Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>): Response<404, Message, Headers, Body>;
