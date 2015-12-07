/** FLUX ***/
import { createStore } from 'redux';

// Handler / Reducer

export const initialState = {
    readmore_visible: false
}

export function Handler (state = initialState, action) {
    switch (action.type) {
        case 'TOGGLE_READMORE':
            return state = {readmore_visible: !state.readmore_visible};
        case 'HIDE_READMORE':
            return state = {readmore_visible: false};
        case 'SHOW_READMORE':
            return state = {readmore_visible: true};
        default:
            return state;
    }

    return state;
}

export const store = createStore(Handler);