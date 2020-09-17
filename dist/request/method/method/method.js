var Method;
(function (Method) {
    /**
     * The `CONNECT` method establishes a tunnel to the server identified by the
     * target resource.
     */
    Method["CONNECT"] = "CONNECT";
    /**
     * The `DELETE` method deletes the specified resource.
     */
    Method["DELETE"] = "DELETE";
    /**
     * The `GET` method requests a representation of the specified resource.
     * Requests using GET should only retrieve data.
     */
    Method["GET"] = "GET";
    /**
     * The `HEAD` method asks for a response identical to that of a GET request,
     * but without the response body.
     */
    Method["HEAD"] = "HEAD";
    /**
     * The `OPTIONS` method is used to describe the communication options for the
     * target resource.
     */
    Method["OPTIONS"] = "OPTIONS";
    /**
     * The PATCH method is used to apply partial modifications to a resource.
     */
    Method["PATCH"] = "PATCH";
    /**
     * The `POST` method is used to submit an entity to the specified resource,
     * often causing a change in state or side effects on the server.
     */
    Method["POST"] = "POST";
    /**
     * The `PUT` method replaces all current representations of the target
     * resource with the request payload.
     */
    Method["PUT"] = "PUT";
    /**
     * The `TRACE` method performs a message loop-back test along the path to the
     * target resource.
     */
    Method["TRACE"] = "TRACE";
})(Method || (Method = {}));
/**
 * @public
 */
export default Method;
//# sourceMappingURL=method.js.map