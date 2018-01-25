import { actions, TActionResult } from "./actions";
import { liftFn } from "./lift";
import * as _ from "underscore";

var mSqr = (state: number): TActionResult => {
    var sqr = state * state;
    return { value: sqr, state: sqr };
};

var mNote = (state): TActionResult => {
    console.log(state);
    return { value: undefined, state: state };
};

var mNeg = (state): TActionResult => {
    return { value: -state, state: -state };
};

var doubleSquareAction = actions(
    [mSqr, mSqr, mNote, mNeg], (value: any[], state: number) => {
        return { value, state };
    });

//doubleSquareAction(10);

var mSqr2 = liftFn(mSqr);
var mNote2 = liftFn(mNote, _.identity);
var mNeg2 = liftFn(mNeg);

var doubleSquareAction2 = actions([mSqr2(), mSqr2(), mNote2(), mNeg2()], (value: any[], state: number) => {
    return { value, state };
});