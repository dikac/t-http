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
    class Standard {
        constructor(method, path, header, body) {
            this.method = method;
            this.path = path;
            this.header = header;
            this.body = body;
        }
    }
    exports.default = Standard;
});
//# sourceMappingURL=standard.js.map