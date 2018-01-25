export type TActionResult = { value: any, state: any };
export type TDoneAction = (values: any[], state: any) => any;
type TAction = (state: any) => TActionResult;
type TState = { values: any[], state: any };
// is a hybrid of the pipeline and lazyChain implementations
export function actions(acts: TAction[], done: TDoneAction) {
    return function (seed) {
        var init: TState = { values: [], state: seed };
        // builds up an intermediate state object
        var intermediate: TState = acts.reduce(
            (stateObj: TState, action: TAction) => {
                var result: TActionResult = action(stateObj.state);

                stateObj.values.push(result.value);
                stateObj.state = result.state;

                return stateObj;
            }, init);

        var keepValues = intermediate.values.filter(value => value !== undefined && value !== null);

        return done(keepValues, intermediate.state);
    }
} 