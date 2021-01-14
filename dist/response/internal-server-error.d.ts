import Response from "./response";
export default function InternalServerError<Message extends string, Body, Headers extends Record<string, string>>(response: Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>): Response<500, Message, Headers, Body>;
