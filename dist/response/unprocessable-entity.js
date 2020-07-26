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
    function UnprocessableEntity(body, header) {
        return new standard_2.default(422, standard_1.default(422), header ? header : {}, body);
    }
    exports.default = UnprocessableEntity;
});
//# sourceMappingURL=unprocessable-entity.js.map