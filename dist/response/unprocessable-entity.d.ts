import Response from "./response";
export default function UnprocessableEntity<Message extends string, Body, Headers extends Record<string, string>>(response?: Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>): Response<422, Message, Headers, Body>;
