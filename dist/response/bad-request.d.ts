import Response from "./response";
export default function BadRequest<Message extends string, Body, Headers extends Record<string, string>>(response?: Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>): Response<400, Message, Headers, Body>;
