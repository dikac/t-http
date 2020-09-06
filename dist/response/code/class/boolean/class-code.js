(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../class", "./client-error", "./server-error", "./successful", "./informational", "./redirection"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const class_1 = require("../class");
    const client_error_1 = require("./client-error");
    const server_error_1 = require("./server-error");
    const successful_1 = require("./successful");
    const informational_1 = require("./informational");
    const redirection_1 = require("./redirection");
    /**
     * check if {@param code} is part of {@param status} http status code class
     *
     * @param code
     * @param status
     */
    function ClassCode(code, status) {
        switch (status) {
            case class_1.default.SUCCESSFUL: return successful_1.default(code);
            case class_1.default.CLIENT_ERROR: return client_error_1.default(code);
            case class_1.default.SERVER_ERROR: return server_error_1.default(code);
            case class_1.default.INFORMATIONAL: return informational_1.default(code);
            case class_1.default.REDIRECTION: return redirection_1.default(code);
        }
    }
    exports.default = ClassCode;
});
//# sourceMappingURL=class-code.js.map