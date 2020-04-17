import { CounterButtonActionTypes, INCREMENT_COUNTER_VALUE, DECREMENT_COUNTER_VALUE, CHANGE_BUTTON_COLOR } from "./types";

export function incrementCounterValue(): CounterButtonActionTypes {
    return {
        type: INCREMENT_COUNTER_VALUE
    }
}

export function decrementCounterValue(): CounterButtonActionTypes {
    return {
        type: DECREMENT_COUNTER_VALUE
    }
}

export function changeButtonColor(newButtonColor: string): CounterButtonActionTypes {
    return {
        type: CHANGE_BUTTON_COLOR,
        payload: newButtonColor
    }
}