"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actions_1 = require("./actions");
const lift_1 = require("./lift");
const _ = require("underscore");
var mSqr = (state) => {
    var sqr = state * state;
    return { value: sqr, state: sqr };
};
var mNote = (state) => {
    console.log(state);
    return { value: undefined, state: state };
};
var mNeg = (state) => {
    return { value: -state, state: -state };
};
var doubleSquareAction = actions_1.actions([mSqr, mSqr, mNote, mNeg], (value, state) => {
    return { value, state };
});
//doubleSquareAction(10);
var mSqr2 = lift_1.liftFn(mSqr);
var mNote2 = lift_1.liftFn(mNote, _.identity);
var mNeg2 = lift_1.liftFn(mNeg);
var doubleSquareAction2 = actions_1.actions([mSqr2(), mSqr2(), mNote2(), mNeg2()], (value, state) => {
    return { value, state };
});
//# sourceMappingURL=actions-list-test.js.map