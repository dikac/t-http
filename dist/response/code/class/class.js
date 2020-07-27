(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Class;
    (function (Class) {
        /**
         * 1XX
         * informational response – the request was received, continuing process
         */
        Class["INFORMATIONAL"] = "INFORMATIONAL";
        /**
         * 2XX
         * the request was successfully received, understood, and accepted
         */
        Class["SUCCESSFUL"] = "SUCCESSFUL";
        /**
         * 3XX
         * further action needs to be taken in order to complete the request
         */
        Class["REDIRECTION"] = "REDIRECTION";
        /**
         * 4XX
         *  the request contains bad syntax or cannot be fulfilled
         */
        Class["CLIENT_ERROR"] = "CLIENT_ERROR";
        /**
         * 5xx
         * the server failed to fulfil an apparently valid request
         */
        Class["SERVER_ERROR"] = "SERVER_ERROR";
    })(Class || (Class = {}));
    exports.default = Class;
});
//# sourceMappingURL=class.js.map