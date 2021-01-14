import Response from "./response";
export default function Created<Message extends string, Body, Headers extends Record<string, string>>(response?: Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>): Response<201, Message, Headers, Body>;
