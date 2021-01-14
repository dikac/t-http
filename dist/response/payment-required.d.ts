import Response from "./response";
export default function PaymentRequired<Message extends string, Body, Headers extends Record<string, string>>(response: Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>): Response<402, Message, Headers, Body>;
