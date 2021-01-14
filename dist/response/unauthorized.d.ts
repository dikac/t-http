import Response from "./response";
export default function Unauthorized<Message extends string, Body, Headers extends Record<string, string>>(response?: Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>): Response<401, Message, Headers, Body>;
