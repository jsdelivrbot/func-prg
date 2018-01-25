"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function pipeline(seed, ...funcs) {
    return funcs.reduce((acc, func) => func(acc), seed);
}
exports.pipeline = pipeline;
;
//# sourceMappingURL=pipeline.js.map