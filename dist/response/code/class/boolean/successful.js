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
     * check if {@param code} is part of Successful http status code (2xx)
     *
     * @param code
     */
    function Successful(code) {
        return greater_1.default(code, 200, true) && lower_1.default(code, 300, false);
    }
    exports.default = Successful;
});
//# sourceMappingURL=successful.js.map