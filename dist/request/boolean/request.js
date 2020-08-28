(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-string/boolean/string", "@dikac/t-object/property/boolean/exists", "@dikac/t-object/boolean/object", "@dikac/t-enum/boolean/enum", "../method/method/method"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const string_1 = require("@dikac/t-string/boolean/string");
    const exists_1 = require("@dikac/t-object/property/boolean/exists");
    const object_1 = require("@dikac/t-object/boolean/object");
    const enum_1 = require("@dikac/t-enum/boolean/enum");
    const method_1 = require("../method/method/method");
    function Request(value) {
        if (!exists_1.default(value, 'header') || !object_1.default(value.header)) {
            return false;
        }
        if (!exists_1.default(value, 'path') || !string_1.default(value.path)) {
            return false;
        }
        if (!exists_1.default(value, 'method') || !enum_1.default(value.method, method_1.default)) {
            return false;
        }
        return true;
    }
    exports.default = Request;
});
//# sourceMappingURL=request.js.map