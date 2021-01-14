import Response from "./response";
export default function Conflict<Message extends string, Body, Headers extends Record<string, string>>(response?: Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>): Response<409, Message, Headers, Body>;
