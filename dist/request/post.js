(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./standard", "./method/method/method"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const standard_1 = require("./standard");
    const method_1 = require("./method/method/method");
    function Post(body, path, header) {
        return new standard_1.default(method_1.default.POST, path, header ? header : {}, body);
    }
    exports.default = Post;
});
//# sourceMappingURL=post.js.map