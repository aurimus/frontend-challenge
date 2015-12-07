import { store } from './store';

export function renderButton () {
    if (store.getState().readmore_visible) {
        this.textContent = 'Show less';
    } else {
        this.textContent = 'Show more';
    }
}

export function renderTextVisiblity () {
    if (store.getState().readmore_visible) {
        this.style.display = 'block';
    } else {
        this.style.display = 'none';
    }
}