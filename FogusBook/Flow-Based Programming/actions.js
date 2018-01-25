"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// is a hybrid of the pipeline and lazyChain implementations
function actions(acts, done) {
    return function (seed) {
        var init = { values: [], state: seed };
        // builds up an intermediate state object
        var intermediate = acts.reduce((stateObj, action) => {
            var result = action(stateObj.state);
            stateObj.values.push(result.value);
            stateObj.state = result.state;
            return stateObj;
        }, init);
        var keepValues = intermediate.values.filter(value => value !== undefined && value !== null);
        return done(keepValues, intermediate.state);
    };
}
exports.actions = actions;
//# sourceMappingURL=actions.js.map