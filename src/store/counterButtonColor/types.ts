/**
 * Expected Data Structure: 
 * CounterAndButtonState = {
 *      countedNumber: number;
 *      buttonColor: string;
 * }
 */

//"Models Type Definitions"
export interface CounterAndButtonState {
    countedNumber: number;
    buttonColor: string;
}

//"Action Type Definitions"
export const INCREMENT_COUNTER_VALUE = 'INCREMENT_COUNTER_VALUE';
export const DECREMENT_COUNTER_VALUE = 'DECREMENT_COUNTER_VALUE';
export const CHANGE_BUTTON_COLOR = 'CHANGE_BUTTON_COLOR';

//"Action Definitions"
interface IncrementCounterValue {
    type: typeof INCREMENT_COUNTER_VALUE;
}

interface DecrementCounterValue {
    type: typeof DECREMENT_COUNTER_VALUE;
}

interface ChangeButtonColor {
    type: typeof CHANGE_BUTTON_COLOR;
    payload: string;
}

export type CounterButtonActionTypes = IncrementCounterValue |
    DecrementCounterValue |
    ChangeButtonColor