import { CounterAndButtonState, CounterButtonActionTypes, DECREMENT_COUNTER_VALUE, INCREMENT_COUNTER_VALUE, CHANGE_BUTTON_COLOR, CHANGE_COUNTER_VALUE } from "./types";

/**
 * Expected Data Structure:
 * CounterAndButtonState = {
 *      countedNumber: number;
 *      buttonColor: string;
 * }
 * 
 * CounterAndButtonState = {
 *      countedNumber: 0 ,
 *      buttonColor : "facebook"
 * }
 */

const initialState: CounterAndButtonState = {
    countedNumber: 1337,
    buttonColor: "red"
}

export function counterAndButtonReducer(state = initialState, action: CounterButtonActionTypes): CounterAndButtonState {
    switch (action.type) {
        case DECREMENT_COUNTER_VALUE:
            return {
                ...state,
                countedNumber: --state.countedNumber
            }
        case INCREMENT_COUNTER_VALUE:
            return {
                ...state,
                countedNumber: ++state.countedNumber
            }
        case CHANGE_BUTTON_COLOR:
            return {
                ...state,
                buttonColor: action.payload
            }
        case CHANGE_COUNTER_VALUE:
            return {
                ...state,
                countedNumber: action.payload
            }
        default:
            return state;
    }
}