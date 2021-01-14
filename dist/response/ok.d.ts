import Response from "./response";
export default function Ok<Message extends string, Body, Headers extends Record<string, string>>(response?: Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>): Response<200, Message, Headers, Body>;
