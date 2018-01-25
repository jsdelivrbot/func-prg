"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actions_1 = require("./actions");
var mSqr = (state) => {
    var sqr = state * state;
    return { value: sqr, state: sqr };
};
var mNode = (state) => {
    console.log(state);
    return { value: undefined, state: state };
};
var mNeg = (state) => {
    return { value: -state, state: -state };
};
var doubleSquareAction = actions_1.actions([mSqr, mSqr, mNode, mNeg], (value, state) => {
    return { value, state };
});
doubleSquareAction(10);
//# sourceMappingURL=actions-test.js.map