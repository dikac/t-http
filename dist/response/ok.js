(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./codes/standard"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const standard_1 = require("./codes/standard");
    function Ok(body, header) {
        return {
            message: standard_1.default()["200"],
            body: body,
            code: 200,
            header: (header ? header : {})
        };
    }
    exports.default = Ok;
});
//# sourceMappingURL=ok.js.map