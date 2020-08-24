(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-object/property/boolean/property", "@dikac/t-number/boolean/number", "@dikac/t-code/boolean/code", "@dikac/t-message/boolean/message", "@dikac/t-string/boolean/string", "@dikac/t-object/boolean/object"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const property_1 = require("@dikac/t-object/property/boolean/property");
    const number_1 = require("@dikac/t-number/boolean/number");
    const code_1 = require("@dikac/t-code/boolean/code");
    const message_1 = require("@dikac/t-message/boolean/message");
    const string_1 = require("@dikac/t-string/boolean/string");
    const object_1 = require("@dikac/t-object/boolean/object");
    function Response(value) {
        if (!code_1.default(value) || !number_1.default(value.code)) {
            return false;
        }
        if (!message_1.default(value) || !string_1.default(value.message)) {
            return false;
        }
        if (!property_1.default(value, 'header') || !object_1.default(value.header)) {
            return false;
        }
        return true;
    }
    exports.default = Response;
});
//# sourceMappingURL=response.js.map