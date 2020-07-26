(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./message/message/standard", "./standard"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const standard_1 = require("./message/message/standard");
    const standard_2 = require("./standard");
    function InternalServerError(body, header) {
        return new standard_2.default(500, standard_1.default(500), header ? header : {}, body);
    }
    exports.default = InternalServerError;
});
//# sourceMappingURL=internal-server-error.js.map