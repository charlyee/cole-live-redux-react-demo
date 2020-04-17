import { CounterButtonActionTypes, INCREMENT_COUNTER_VALUE, DECREMENT_COUNTER_VALUE, CHANGE_BUTTON_COLOR } from "./types";

export function incrementCounterValue(): CounterButtonActionTypes {
    console.log("increment called inside actions folder");
    return {
        type: INCREMENT_COUNTER_VALUE
    }
}

export function decrementCounterValue(): CounterButtonActionTypes {
    console.log("decrement called inside actions folder");
    return {
        type: DECREMENT_COUNTER_VALUE
    }
}

export function changeButtonColor(newButtonColor: string): CounterButtonActionTypes {
    console.log("change button cololr called inside actions folder");
    return {
        type: CHANGE_BUTTON_COLOR,
        payload: newButtonColor
    }
}