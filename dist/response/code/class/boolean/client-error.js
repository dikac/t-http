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
    /**
     * check if status code {@param code} is part of class code {@param prefix}
     */
    const lower_1 = require("@dikac/t-number/boolean/lower");
    const greater_1 = require("@dikac/t-number/boolean/greater");
    function ClientError(code) {
        return greater_1.default(code, 400, true) && lower_1.default(code, 500, false);
    }
    exports.default = ClientError;
});
//# sourceMappingURL=client-error.js.map