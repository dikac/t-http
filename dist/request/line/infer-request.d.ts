import Request from "../request";
import Line from "./line";
import PathInfer from "../path/infer";
import MethodInfer from "../method/infer";
declare type InferRequest<Req extends Request> = Line<PathInfer<Req>, MethodInfer<Req>>;
export default InferRequest;
