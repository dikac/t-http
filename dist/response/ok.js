(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./codes/standard", "./standard"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const standard_1 = require("./codes/standard");
    const standard_2 = require("./standard");
    function Ok(body, header) {
        return new standard_2.default(200, standard_1.default(200), header ? header : {}, body);
    }
    exports.default = Ok;
});
//# sourceMappingURL=ok.js.map