(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-number/boolean/lower", "@dikac/t-number/boolean/greater"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const lower_1 = require("@dikac/t-number/boolean/lower");
    const greater_1 = require("@dikac/t-number/boolean/greater");
    /**
     * check if {@param code} is part of client error http status code (4xx)
     *
     * @param code
     */
    function ClientError(code) {
        return greater_1.default(code, 400, true) && lower_1.default(code, 500, false);
    }
    exports.default = ClientError;
});
//# sourceMappingURL=client-error.js.map